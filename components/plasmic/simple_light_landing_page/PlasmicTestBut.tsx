// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 94js2uNtUqpbuto4RjVnjs
// Component: Ska_iDjcL1
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: mRaKtmqnaNhtfA/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: 94js2uNtUqpbuto4RjVnjs/projectcss
import sty from "./PlasmicTestBut.module.css"; // plasmic-import: Ska_iDjcL1/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: gOR-aQ2ASZZYNh/icon

export type PlasmicTestBut__VariantMembers = {};
export type PlasmicTestBut__VariantsArgs = {};
type VariantPropType = keyof PlasmicTestBut__VariantsArgs;
export const PlasmicTestBut__VariantProps = new Array<VariantPropType>();

export type PlasmicTestBut__ArgsType = {
  testprop?: string;
};
type ArgPropType = keyof PlasmicTestBut__ArgsType;
export const PlasmicTestBut__ArgProps = new Array<ArgPropType>("testprop");

export type PlasmicTestBut__OverridesType = {
  root?: p.Flex<typeof Button>;
};

export interface DefaultTestButProps {
  testprop?: string;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise;
  });

function PlasmicTestBut__RenderFunc(props: {
  variants: PlasmicTestBut__VariantsArgs;
  args: PlasmicTestBut__ArgsType;
  overrides: PlasmicTestBut__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          testprop: "https://dupa" as const
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <Button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTestBut__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTestBut__VariantsArgs;
    args?: PlasmicTestBut__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTestBut__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTestBut__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTestBut__ArgProps,
          internalVariantPropNames: PlasmicTestBut__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTestBut__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestBut";
  } else {
    func.displayName = `PlasmicTestBut.${nodeName}`;
  }
  return func;
}

export const PlasmicTestBut = Object.assign(
  // Top-level PlasmicTestBut renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTestBut
    internalVariantProps: PlasmicTestBut__VariantProps,
    internalArgProps: PlasmicTestBut__ArgProps
  }
);

export default PlasmicTestBut;
/* prettier-ignore-end */
