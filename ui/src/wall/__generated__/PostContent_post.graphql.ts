/**
 * @generated SignedSource<<5032f91fd385d68571d7318091fadda0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostContent_post$data = {
  readonly content: string;
  readonly insertedAt: any;
  readonly " $fragmentType": "PostContent_post";
};
export type PostContent_post = PostContent_post$data;
export type PostContent_post$key = {
  readonly " $data"?: PostContent_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"PostContent_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostContent_post",
  "selections": [
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
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "402f412c5b9a629ee1f2a8fabaea9167";

export default node;
