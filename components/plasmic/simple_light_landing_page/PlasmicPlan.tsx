// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 94js2uNtUqpbuto4RjVnjs
// Component: qdfHE4SfDf13cF
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
import BaseCard from "../../BaseCard"; // plasmic-import: uW2IvJsOpicilR/component
import Bullet from "../../Bullet"; // plasmic-import: mgL5fo4L0Nj28c/component
import Button from "../../Button"; // plasmic-import: mRaKtmqnaNhtfA/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: 94js2uNtUqpbuto4RjVnjs/projectcss
import sty from "./PlasmicPlan.module.css"; // plasmic-import: qdfHE4SfDf13cF/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: gOR-aQ2ASZZYNh/icon

export type PlasmicPlan__VariantMembers = {};
export type PlasmicPlan__VariantsArgs = {};
type VariantPropType = keyof PlasmicPlan__VariantsArgs;
export const PlasmicPlan__VariantProps = new Array<VariantPropType>();

export type PlasmicPlan__ArgsType = {
  price?: React.ReactNode;
  name?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPlan__ArgsType;
export const PlasmicPlan__ArgProps = new Array<ArgPropType>(
  "price",
  "name",
  "description",
  "children"
);

export type PlasmicPlan__OverridesType = {
  root?: p.Flex<typeof BaseCard>;
};

export interface DefaultPlanProps {
  price?: React.ReactNode;
  name?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise;
  });

function PlasmicPlan__RenderFunc(props: {
  variants: PlasmicPlan__VariantsArgs;
  args: PlasmicPlan__ArgsType;
  overrides: PlasmicPlan__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <BaseCard
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox___5RC10)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__r9Z9R)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Basic",
            value: args.name,
            className: classNames(sty.slotTargetName)
          })}
          {p.renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ywpK
                )}
              >
                {"$10"}
              </div>
            ),

            value: args.price
          })}
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__eXrSf)}
              >
                <Bullet
                  className={classNames("__wab_instance", sty.bullet__ljOb2)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__rd4WP)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet___2Nkdw)}
                />
              </p.Stack>
            ),

            value: args.description
          })}

          <div className={classNames(projectcss.all, sty.freeBox__iGh4P)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <Button
                  className={classNames("__wab_instance", sty.button__lMqNb)}
                  color={"outlineBlue" as const}
                >
                  {"Get started"}
                </Button>
              ),

              value: args.children
            })}
          </div>
        </p.Stack>
      </div>
    </BaseCard>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof BaseCard;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPlan__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPlan__VariantsArgs;
    args?: PlasmicPlan__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPlan__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPlan__ArgsType,
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
          internalArgPropNames: PlasmicPlan__ArgProps,
          internalVariantPropNames: PlasmicPlan__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPlan__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPlan";
  } else {
    func.displayName = `PlasmicPlan.${nodeName}`;
  }
  return func;
}

export const PlasmicPlan = Object.assign(
  // Top-level PlasmicPlan renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPlan
    internalVariantProps: PlasmicPlan__VariantProps,
    internalArgProps: PlasmicPlan__ArgProps
  }
);

export default PlasmicPlan;
/* prettier-ignore-end */
