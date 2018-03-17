import { startMining } from 'mining/startMining';
import store from 'store/store';
import uniq from 'lodash/uniq';

export async function isNodeSynced() {
  let { allPeers, isMining } = store.getState();
  let validPeers = allPeers.filter(peer => (!peer.unreachable && !peer.wrongVersion));
  let allPeersSynced = uniq(validPeers.map(({ synced }) => synced));
  let isSynced = allPeersSynced.length === 1 && allPeersSynced[0];
  return isSynced;
}
