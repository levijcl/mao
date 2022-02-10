/**
 * @generated SignedSource<<5e7c4a4fa477df181794d1d89223cf5a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReplyToLink_post$data = {
  readonly id: string;
  readonly " $fragmentType": "ReplyToLink_post";
};
export type ReplyToLink_post = ReplyToLink_post$data;
export type ReplyToLink_post$key = {
  readonly " $data"?: ReplyToLink_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"ReplyToLink_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReplyToLink_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "60ec07365bc0f37df1133c41cbceb195";

export default node;
