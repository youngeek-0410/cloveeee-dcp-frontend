import { setupWorker } from "msw";
import { setupServer } from "msw/node";

import { backendApiHandlers } from "./handlers";

// for browser
export const setupMockWorker = () => setupWorker(...backendApiHandlers);

// for node
export const setupMockServer = () => setupServer(...backendApiHandlers);
