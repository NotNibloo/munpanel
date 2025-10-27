import { auth } from '../../utils/auth';
import { toNodeHandler } from 'better-auth/node';

const handleAuthRequest = toNodeHandler(auth);

export default defineEventHandler((event) => {
  return handleAuthRequest(event.node.req, event.node.res);
});
