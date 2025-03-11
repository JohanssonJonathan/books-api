import NodeCache from 'node-cache';

const config: NodeCache.Options = {
  stdTTL: 10,
};
const cache = new NodeCache(config);
export default cache;
