import { createStore } from 'redux';
import findIndex from 'lodash/findIndex';

const initialState = {

  // Initialization
  dbLoaded: false,
  lastBlock: null,
  numBlocks: 0,
  allPeers: [ ], // list of { ip: String, port: Number }
  version: 1,
  difficulty: 0,

  // Mempool
  memoryPool: [ ], // list of valid transactions (txs)
  pendingBlockTxs: [ ],
  unfetchedHeaders: new Set(),
  loadingHeaders: new Set(),
  orphanTransactions: new Set(),

  // Mining
  isMining: false,
};

let newUnfetchedHeaders, newLoadingHeaders, peerIdx, newMemoryPool, tempMempool;

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_INITIAL_BLOCKS':
      return {
        ...state,
        dbLoaded  : true,
        lastBlock : action.blocks[action.blocks.length - 1],
        numBlocks : action.blocks.length,
      };
    case 'ADD_BLOCK':
      return {
        ...state,
        lastBlock : action.block,
        numBlocks : state.numBlocks + 1,
      };
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.difficulty };
    case 'SET_PEERS':
      return { ...state, allPeers: action.allPeers };
    case 'CONNECT_PEER':
      peerIdx = findIndex(state.allPeers, ({ ip }) => ip === action.ip);
      return {
        ...state,
        allPeers: peerIdx === -1 ? state.allPeers : [
          ...state.allPeers.slice(0, peerIdx),
          { ip: action.ip, client: action.client, synced: false, connected: true },
          ...state.allPeers.slice(peerIdx + 1),
        ],
      }
    case 'ADD_UNFETCHED_HEADERS':
      return {
        ...state,
        unfetchedHeaders: new Set([
          ...Array.from(state.unfetchedHeaders),
          ...action.headers,
        ]),
      };
    case 'LOADING_BLOCK':
      newUnfetchedHeaders = state.unfetchedHeaders;
      newUnfetchedHeaders.delete(action.header);
      newLoadingHeaders = state.loadingHeaders;
      newLoadingHeaders.add(action.header);
      return {
        ...state,
        unfetchedHeaders  : newUnfetchedHeaders,
        loadingHeaders    : newLoadingHeaders,
      };
    case 'NEW_BLOCK':
      newUnfetchedHeaders = state.unfetchedHeaders;
      newUnfetchedHeaders.delete(action.header);
      newLoadingHeaders = state.loadingHeaders;
      newLoadingHeaders.delete(action.header);
      return {
        ...state,
        lastBlock         : action.block,
        numBlocks         : state.numBlocks + 1,
        unfetchedHeaders  : newUnfetchedHeaders,
        loadingHeaders    : newLoadingHeaders,
      };
    case 'SYNC_PEER':
      peerIdx = findIndex(state.allPeers, ({ ip }) => ip === action.ip);
      return {
        ...state,
        allPeers: peerIdx === -1 ? state.allPeers : [
          ...state.allPeers.slice(0, peerIdx),
          { ...state.allPeers[peerIdx], synced: true, connected: true },
          ...state.allPeers.slice(peerIdx + 1),
        ],
      };
    case 'NEW_TX':
      return { ...state, memoryPool: [ ...state.memoryPool, action.tx ] };
    case 'START_MINING':
      return { ...state, isMining: true };
    case 'STOP_MINING':
      tempMempool = state.memoryPool;
      return { ...state, isMining: false, memoryPool: [], pendingBlockTxs: tempMempool };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch = addLoggingToDispatch(store);

function addLoggingToDispatch(store) {
  const rawDispatch = store.dispatch;
  return (action) => {
    console.log(`> Action: ${action.type}, (Keys:  ${Object.keys(action).join(', ')})`);
    const returnValue = rawDispatch(action);
    return returnValue;
  }
}

export default store;
