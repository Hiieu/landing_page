// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 94js2uNtUqpbuto4RjVnjs
// Component: jhpQcoNJaplu7
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
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent

import { useScreenVariants as useScreenVariants_0Vz273XwlgvZup } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 0vz273XwlgvZup/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: 94js2uNtUqpbuto4RjVnjs/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: jhpQcoNJaplu7/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: N094xoc0uXmMDp/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: gOR-aQ2ASZZYNh/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: B-aKZVh4Zpyw3o/icon

export type PlasmicHeader__VariantMembers = {};
export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
  httpApiFetcher?: p.Flex<typeof DataFetcher>;
};

export interface DefaultHeaderProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise;
  });

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_0Vz273XwlgvZup()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={`/`}
        platform={"nextjs"}
      >
        <LogoIcon
          className={classNames(projectcss.all, sty.svg__yrnEc)}
          role={"img"}
        />
      </p.PlasmicLink>

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Button
          className={classNames("__wab_instance", sty.button__tvNci)}
          color={"clear" as const}
          link={`/features`}
          size={"compact" as const}
        >
          {"Features"}
        </Button>

        <Button
          className={classNames("__wab_instance", sty.button__iRuTi)}
          color={"clear" as const}
          link={`/pricing`}
          size={"compact" as const}
        >
          {"Pricing"}
        </Button>

        <Button
          className={classNames("__wab_instance", sty.button___5LIf)}
          color={"clear" as const}
          size={"compact" as const}
        >
          {"Sign in"}
        </Button>

        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <Button
            className={classNames("__wab_instance", sty.button___1OHi)}
            endIcon={
              <React.Fragment>
                <DataFetcher
                  data-plasmic-name={"httpApiFetcher"}
                  data-plasmic-override={overrides.httpApiFetcher}
                  className={classNames("__wab_instance", sty.httpApiFetcher)}
                  dataName={"fetchedData" as const}
                  errorDisplay={
                    <ph.DataCtxReader>
                      {$ctx => "Error fetching data"}
                    </ph.DataCtxReader>
                  }
                  headers={{
                    "Content-Type": "application/json",
                    Accept: "application/json"
                  }}
                  loadingDisplay={
                    <ph.DataCtxReader>{$ctx => "Loading..."}</ph.DataCtxReader>
                  }
                  method={"GET" as const}
                  noLayout={false}
                  url={"https://api.github.com/users/plasmicapp/repos" as const}
                />

                <RightArrowIcon
                  className={classNames(projectcss.all, sty.svg__clcFw)}
                  role={"img"}
                />
              </React.Fragment>
            }
            showEndIcon={true}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"Sign up"}
            </div>
          </Button>
        ) : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link", "freeBox", "text", "httpApiFetcher"],
  link: ["link"],
  freeBox: ["freeBox", "text", "httpApiFetcher"],
  text: ["text"],
  httpApiFetcher: ["httpApiFetcher"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
  freeBox: "div";
  text: "div";
  httpApiFetcher: typeof DataFetcher;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
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
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    httpApiFetcher: makeNodeComponent("httpApiFetcher"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */