/**
 * @generated SignedSource<<d68233762c1a25fb328e50e6bccc95c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostListPaginationQuery$variables = {
  count?: number | null;
  cursor?: string | null;
};
export type PostListPaginationQueryVariables = PostListPaginationQuery$variables;
export type PostListPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"PostList_root">;
};
export type PostListPaginationQueryResponse = PostListPaginationQuery$data;
export type PostListPaginationQuery = {
  variables: PostListPaginationQueryVariables;
  response: PostListPaginationQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostListPaginationQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          }
        ],
        "kind": "FragmentSpread",
        "name": "PostList_root"
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostListPaginationQuery",
    "selections": [
      {
        "alias": "posts",
        "args": (v1/*: any*/),
        "concreteType": "PostConnection",
        "kind": "LinkedField",
        "name": "listPosts",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PostEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Post",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "content",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "insertedAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Post",
                    "kind": "LinkedField",
                    "name": "replyTo",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "posts",
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "PostList_root_posts",
        "kind": "LinkedHandle",
        "name": "listPosts"
      }
    ]
  },
  "params": {
    "cacheID": "66bd58e217b9c28e31f3b38b3d7aa626",
    "id": null,
    "metadata": {},
    "name": "PostListPaginationQuery",
    "operationKind": "query",
    "text": "query PostListPaginationQuery(\n  $count: Int = 10\n  $cursor: String = null\n) {\n  ...PostList_root_1G22uz\n}\n\nfragment PostListItem_post on Post {\n  id\n  content\n  insertedAt\n  replyTo {\n    ...ReplyToLink_post\n    id\n  }\n}\n\nfragment PostList_root_1G22uz on RootQueryType {\n  posts: listPosts(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...PostListItem_post\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ReplyToLink_post on Post {\n  id\n}\n"
  }
};
})();

(node as any).hash = "e0afbf5dee4f9bbdbcc330570e0a2609";

export default node;
