/**
 * @generated SignedSource<<9f591eee7857ef5a9f81dd32d38253e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostComments_post$data = {
  readonly comments: ReadonlyArray<{
    readonly id: string;
    readonly insertedAt: any;
    readonly " $fragmentSpreads": FragmentRefs<"PostCommentContent_comment">;
  }>;
  readonly " $fragmentType": "PostComments_post";
};
export type PostComments_post = PostComments_post$data;
export type PostComments_post$key = {
  readonly " $data"?: PostComments_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"PostComments_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostComments_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Post",
      "kind": "LinkedField",
      "name": "comments",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "PostCommentContent_comment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "05b465ba29a5f721f79ff96ffa73f1da";

export default node;
