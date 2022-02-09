/**
 * @generated SignedSource<<2a020355820691400215de970c596646>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppQuery$variables = {};
export type AppQueryVariables = AppQuery$variables;
export type AppQuery$data = {
  readonly helloWorld: string;
};
export type AppQueryResponse = AppQuery$data;
export type AppQuery = {
  variables: AppQueryVariables;
  response: AppQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "helloWorld",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v0/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "397c54f771fd4503fa29f6d5f3887071",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  helloWorld\n}\n"
  }
};
})();

(node as any).hash = "10b7b746287fb525438ff1ec0add9ea2";

export default node;
