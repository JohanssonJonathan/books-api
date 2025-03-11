import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 120, checkperiod: 120 });

export default cache;
