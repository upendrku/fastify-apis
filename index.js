"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const redis_1 = __importDefault(require("@fastify/redis"));
const server = (0, fastify_1.default)({
    logger: true
});
// Make connection with Redis server
server.register(redis_1.default, {
    url: 'redis://127.0.0.1:6379'
});
// Get all redis key values from Redis server
server.get('/', function handler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        // const { redis } = server
        // let result = redis.get('Test', (err, val) => {
        //     return err || val;
        // });
        return 'hello'; // { result }
    });
});
// Run web server
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
