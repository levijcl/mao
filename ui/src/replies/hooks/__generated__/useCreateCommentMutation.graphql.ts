/**
 * @generated SignedSource<<b4027495c351e29413a871779a21ea9d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateCommentInput = {
  content: string;
  replyId: string;
};
export type useCreateCommentMutation$variables = {
  input: CreateCommentInput;
};
export type useCreateCommentMutationVariables = useCreateCommentMutation$variables;
export type useCreateCommentMutation$data = {
  readonly createComment: {
    readonly result: {
      readonly content: string;
      readonly insertedAt: any;
    } | null;
  };
};
export type useCreateCommentMutationResponse = useCreateCommentMutation$data;
export type useCreateCommentMutation = {
  variables: useCreateCommentMutationVariables;
  response: useCreateCommentMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "insertedAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateCommentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PostPayload",
        "kind": "LinkedField",
        "name": "createComment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "result",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutationType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreateCommentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "PostPayload",
        "kind": "LinkedField",
        "name": "createComment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "result",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ae17634292c474dbaff195112b6e24a6",
    "id": null,
    "metadata": {},
    "name": "useCreateCommentMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateCommentMutation(\n  $input: CreateCommentInput!\n) {\n  createComment(input: $input) {\n    result {\n      content\n      insertedAt\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ef07cb1f6764ca081cceace4389a0b65";

export default node;
