// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// source: jaeger/proto/api_v3/query_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientReadableStream,
  type ClientUnaryCall,
  type handleServerStreamingCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { TracesData } from "../../../opentelemetry/proto/trace/v1/trace";

export const protobufPackage = "jaeger.api_v3";

export interface GetTraceRequest {
  traceId: string;
  startTime: Date | undefined;
  endTime: Date | undefined;
  rawTraces: boolean;
}

export interface TraceQueryParameters {
  serviceName: string;
  operationName: string;
  attributes: { [key: string]: string };
  startTimeMin: Date | undefined;
  startTimeMax: Date | undefined;
  durationMin: Duration | undefined;
  durationMax: Duration | undefined;
  searchDepth: number;
  rawTraces: boolean;
}

export interface TraceQueryParameters_AttributesEntry {
  key: string;
  value: string;
}

export interface FindTracesRequest {
  query: TraceQueryParameters | undefined;
}

export interface GetServicesRequest {}

export interface GetServicesResponse {
  services: string[];
}

export interface GetOperationsRequest {
  service: string;
  spanKind: string;
}

export interface Operation {
  name: string;
  spanKind: string;
}

export interface GetOperationsResponse {
  operations: Operation[];
}

function createBaseGetTraceRequest(): GetTraceRequest {
  return {
    traceId: "",
    startTime: undefined,
    endTime: undefined,
    rawTraces: false,
  };
}

export const GetTraceRequest: MessageFns<GetTraceRequest> = {
  encode(
    message: GetTraceRequest,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.traceId !== "") {
      writer.uint32(10).string(message.traceId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(18).fork(),
      ).join();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(26).fork(),
      ).join();
    }
    if (message.rawTraces !== false) {
      writer.uint32(32).bool(message.rawTraces);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetTraceRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTraceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.traceId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.rawTraces = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTraceRequest {
    return {
      traceId: isSet(object.traceId) ? globalThis.String(object.traceId) : "",
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      rawTraces: isSet(object.rawTraces)
        ? globalThis.Boolean(object.rawTraces)
        : false,
    };
  },

  toJSON(message: GetTraceRequest): unknown {
    const obj: any = {};
    if (message.traceId !== "") {
      obj.traceId = message.traceId;
    }
    if (message.startTime !== undefined) {
      obj.startTime = message.startTime.toISOString();
    }
    if (message.endTime !== undefined) {
      obj.endTime = message.endTime.toISOString();
    }
    if (message.rawTraces !== false) {
      obj.rawTraces = message.rawTraces;
    }
    return obj;
  },
};

function createBaseTraceQueryParameters(): TraceQueryParameters {
  return {
    serviceName: "",
    operationName: "",
    attributes: {},
    startTimeMin: undefined,
    startTimeMax: undefined,
    durationMin: undefined,
    durationMax: undefined,
    searchDepth: 0,
    rawTraces: false,
  };
}

export const TraceQueryParameters: MessageFns<TraceQueryParameters> = {
  encode(
    message: TraceQueryParameters,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.operationName !== "") {
      writer.uint32(18).string(message.operationName);
    }
    Object.entries(message.attributes).forEach(([key, value]) => {
      TraceQueryParameters_AttributesEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork(),
      ).join();
    });
    if (message.startTimeMin !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTimeMin),
        writer.uint32(34).fork(),
      ).join();
    }
    if (message.startTimeMax !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTimeMax),
        writer.uint32(42).fork(),
      ).join();
    }
    if (message.durationMin !== undefined) {
      Duration.encode(message.durationMin, writer.uint32(50).fork()).join();
    }
    if (message.durationMax !== undefined) {
      Duration.encode(message.durationMax, writer.uint32(58).fork()).join();
    }
    if (message.searchDepth !== 0) {
      writer.uint32(64).int32(message.searchDepth);
    }
    if (message.rawTraces !== false) {
      writer.uint32(72).bool(message.rawTraces);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TraceQueryParameters {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceQueryParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.serviceName = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.operationName = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          const entry3 = TraceQueryParameters_AttributesEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry3.value !== undefined) {
            message.attributes[entry3.key] = entry3.value;
          }
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.startTimeMin = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.startTimeMax = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.durationMin = Duration.decode(reader, reader.uint32());
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.durationMax = Duration.decode(reader, reader.uint32());
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.searchDepth = reader.int32();
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.rawTraces = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TraceQueryParameters {
    return {
      serviceName: isSet(object.serviceName)
        ? globalThis.String(object.serviceName)
        : "",
      operationName: isSet(object.operationName)
        ? globalThis.String(object.operationName)
        : "",
      attributes: isObject(object.attributes)
        ? Object.entries(object.attributes).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {},
          )
        : {},
      startTimeMin: isSet(object.startTimeMin)
        ? fromJsonTimestamp(object.startTimeMin)
        : undefined,
      startTimeMax: isSet(object.startTimeMax)
        ? fromJsonTimestamp(object.startTimeMax)
        : undefined,
      durationMin: isSet(object.durationMin)
        ? Duration.fromJSON(object.durationMin)
        : undefined,
      durationMax: isSet(object.durationMax)
        ? Duration.fromJSON(object.durationMax)
        : undefined,
      searchDepth: isSet(object.searchDepth)
        ? globalThis.Number(object.searchDepth)
        : 0,
      rawTraces: isSet(object.rawTraces)
        ? globalThis.Boolean(object.rawTraces)
        : false,
    };
  },

  toJSON(message: TraceQueryParameters): unknown {
    const obj: any = {};
    if (message.serviceName !== "") {
      obj.serviceName = message.serviceName;
    }
    if (message.operationName !== "") {
      obj.operationName = message.operationName;
    }
    if (message.attributes) {
      const entries = Object.entries(message.attributes);
      if (entries.length > 0) {
        obj.attributes = {};
        entries.forEach(([k, v]) => {
          obj.attributes[k] = v;
        });
      }
    }
    if (message.startTimeMin !== undefined) {
      obj.startTimeMin = message.startTimeMin.toISOString();
    }
    if (message.startTimeMax !== undefined) {
      obj.startTimeMax = message.startTimeMax.toISOString();
    }
    if (message.durationMin !== undefined) {
      obj.durationMin = Duration.toJSON(message.durationMin);
    }
    if (message.durationMax !== undefined) {
      obj.durationMax = Duration.toJSON(message.durationMax);
    }
    if (message.searchDepth !== 0) {
      obj.searchDepth = Math.round(message.searchDepth);
    }
    if (message.rawTraces !== false) {
      obj.rawTraces = message.rawTraces;
    }
    return obj;
  },
};

function createBaseTraceQueryParameters_AttributesEntry(): TraceQueryParameters_AttributesEntry {
  return { key: "", value: "" };
}

export const TraceQueryParameters_AttributesEntry: MessageFns<TraceQueryParameters_AttributesEntry> =
  {
    encode(
      message: TraceQueryParameters_AttributesEntry,
      writer: BinaryWriter = new BinaryWriter(),
    ): BinaryWriter {
      if (message.key !== "") {
        writer.uint32(10).string(message.key);
      }
      if (message.value !== "") {
        writer.uint32(18).string(message.value);
      }
      return writer;
    },

    decode(
      input: BinaryReader | Uint8Array,
      length?: number,
    ): TraceQueryParameters_AttributesEntry {
      const reader =
        input instanceof BinaryReader ? input : new BinaryReader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseTraceQueryParameters_AttributesEntry();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (tag !== 10) {
              break;
            }

            message.key = reader.string();
            continue;
          }
          case 2: {
            if (tag !== 18) {
              break;
            }

            message.value = reader.string();
            continue;
          }
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skip(tag & 7);
      }
      return message;
    },

    fromJSON(object: any): TraceQueryParameters_AttributesEntry {
      return {
        key: isSet(object.key) ? globalThis.String(object.key) : "",
        value: isSet(object.value) ? globalThis.String(object.value) : "",
      };
    },

    toJSON(message: TraceQueryParameters_AttributesEntry): unknown {
      const obj: any = {};
      if (message.key !== "") {
        obj.key = message.key;
      }
      if (message.value !== "") {
        obj.value = message.value;
      }
      return obj;
    },
  };

function createBaseFindTracesRequest(): FindTracesRequest {
  return { query: undefined };
}

export const FindTracesRequest: MessageFns<FindTracesRequest> = {
  encode(
    message: FindTracesRequest,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.query !== undefined) {
      TraceQueryParameters.encode(
        message.query,
        writer.uint32(10).fork(),
      ).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FindTracesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindTracesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.query = TraceQueryParameters.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindTracesRequest {
    return {
      query: isSet(object.query)
        ? TraceQueryParameters.fromJSON(object.query)
        : undefined,
    };
  },

  toJSON(message: FindTracesRequest): unknown {
    const obj: any = {};
    if (message.query !== undefined) {
      obj.query = TraceQueryParameters.toJSON(message.query);
    }
    return obj;
  },
};

function createBaseGetServicesRequest(): GetServicesRequest {
  return {};
}

export const GetServicesRequest: MessageFns<GetServicesRequest> = {
  encode(
    _: GetServicesRequest,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetServicesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetServicesRequest {
    return {};
  },

  toJSON(_: GetServicesRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseGetServicesResponse(): GetServicesResponse {
  return { services: [] };
}

export const GetServicesResponse: MessageFns<GetServicesResponse> = {
  encode(
    message: GetServicesResponse,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    for (const v of message.services) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetServicesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.services.push(reader.string());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetServicesResponse {
    return {
      services: globalThis.Array.isArray(object?.services)
        ? object.services.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: GetServicesResponse): unknown {
    const obj: any = {};
    if (message.services?.length) {
      obj.services = message.services;
    }
    return obj;
  },
};

function createBaseGetOperationsRequest(): GetOperationsRequest {
  return { service: "", spanKind: "" };
}

export const GetOperationsRequest: MessageFns<GetOperationsRequest> = {
  encode(
    message: GetOperationsRequest,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    if (message.spanKind !== "") {
      writer.uint32(18).string(message.spanKind);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetOperationsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.service = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.spanKind = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOperationsRequest {
    return {
      service: isSet(object.service) ? globalThis.String(object.service) : "",
      spanKind: isSet(object.spanKind)
        ? globalThis.String(object.spanKind)
        : "",
    };
  },

  toJSON(message: GetOperationsRequest): unknown {
    const obj: any = {};
    if (message.service !== "") {
      obj.service = message.service;
    }
    if (message.spanKind !== "") {
      obj.spanKind = message.spanKind;
    }
    return obj;
  },
};

function createBaseOperation(): Operation {
  return { name: "", spanKind: "" };
}

export const Operation: MessageFns<Operation> = {
  encode(
    message: Operation,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.spanKind !== "") {
      writer.uint32(18).string(message.spanKind);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Operation {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.spanKind = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Operation {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      spanKind: isSet(object.spanKind)
        ? globalThis.String(object.spanKind)
        : "",
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.spanKind !== "") {
      obj.spanKind = message.spanKind;
    }
    return obj;
  },
};

function createBaseGetOperationsResponse(): GetOperationsResponse {
  return { operations: [] };
}

export const GetOperationsResponse: MessageFns<GetOperationsResponse> = {
  encode(
    message: GetOperationsResponse,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetOperationsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.operations.push(Operation.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOperationsResponse {
    return {
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetOperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    return obj;
  },
};

export type QueryServiceService = typeof QueryServiceService;
export const QueryServiceService = {
  getTrace: {
    path: "/jaeger.api_v3.QueryService/GetTrace",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetTraceRequest) =>
      Buffer.from(GetTraceRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTraceRequest.decode(value),
    responseSerialize: (value: TracesData) =>
      Buffer.from(TracesData.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TracesData.decode(value),
  },
  findTraces: {
    path: "/jaeger.api_v3.QueryService/FindTraces",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: FindTracesRequest) =>
      Buffer.from(FindTracesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => FindTracesRequest.decode(value),
    responseSerialize: (value: TracesData) =>
      Buffer.from(TracesData.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TracesData.decode(value),
  },
  getServices: {
    path: "/jaeger.api_v3.QueryService/GetServices",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetServicesRequest) =>
      Buffer.from(GetServicesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetServicesRequest.decode(value),
    responseSerialize: (value: GetServicesResponse) =>
      Buffer.from(GetServicesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetServicesResponse.decode(value),
  },
  getOperations: {
    path: "/jaeger.api_v3.QueryService/GetOperations",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetOperationsRequest) =>
      Buffer.from(GetOperationsRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetOperationsRequest.decode(value),
    responseSerialize: (value: GetOperationsResponse) =>
      Buffer.from(GetOperationsResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetOperationsResponse.decode(value),
  },
} as const;

export interface QueryServiceServer extends UntypedServiceImplementation {
  getTrace: handleServerStreamingCall<GetTraceRequest, TracesData>;
  findTraces: handleServerStreamingCall<FindTracesRequest, TracesData>;
  getServices: handleUnaryCall<GetServicesRequest, GetServicesResponse>;
  getOperations: handleUnaryCall<GetOperationsRequest, GetOperationsResponse>;
}

export interface QueryServiceClient extends Client {
  getTrace(
    request: GetTraceRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<TracesData>;
  getTrace(
    request: GetTraceRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<TracesData>;
  findTraces(
    request: FindTracesRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<TracesData>;
  findTraces(
    request: FindTracesRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<TracesData>;
  getServices(
    request: GetServicesRequest,
    callback: (
      error: ServiceError | null,
      response: GetServicesResponse,
    ) => void,
  ): ClientUnaryCall;
  getServices(
    request: GetServicesRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetServicesResponse,
    ) => void,
  ): ClientUnaryCall;
  getServices(
    request: GetServicesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetServicesResponse,
    ) => void,
  ): ClientUnaryCall;
  getOperations(
    request: GetOperationsRequest,
    callback: (
      error: ServiceError | null,
      response: GetOperationsResponse,
    ) => void,
  ): ClientUnaryCall;
  getOperations(
    request: GetOperationsRequest,
    metadata: Metadata,
    callback: (
      error: ServiceError | null,
      response: GetOperationsResponse,
    ) => void,
  ): ClientUnaryCall;
  getOperations(
    request: GetOperationsRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (
      error: ServiceError | null,
      response: GetOperationsResponse,
    ) => void,
  ): ClientUnaryCall;
}

export const QueryServiceClient = makeGenericClientConstructor(
  QueryServiceService,
  "jaeger.api_v3.QueryService",
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ClientOptions>,
  ): QueryServiceClient;
  service: typeof QueryServiceService;
  serviceName: string;
};

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000).toString();
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (globalThis.Number(t.seconds) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
}
