/**
 * @generated SignedSource<<53b72b50b1e6e6e593e3c0b682482cf7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Wall_root$data = {
  readonly " $fragmentSpreads": FragmentRefs<"PostList_root">;
  readonly " $fragmentType": "Wall_root";
};
export type Wall_root = Wall_root$data;
export type Wall_root$key = {
  readonly " $data"?: Wall_root$data;
  readonly " $fragmentSpreads": FragmentRefs<"Wall_root">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Wall_root",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PostList_root"
    }
  ],
  "type": "RootQueryType",
  "abstractKey": null
};

(node as any).hash = "1d5e3c01c715843c39cbd50005b492cb";

export default node;
