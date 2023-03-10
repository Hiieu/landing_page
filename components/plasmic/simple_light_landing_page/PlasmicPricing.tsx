// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 94js2uNtUqpbuto4RjVnjs
// Component: TmI4XX8M7CB1Bi
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
import Header from "../../Header"; // plasmic-import: jhpQcoNJaplu7/component
import Section from "../../Section"; // plasmic-import: ZT5GgETtWmBBv7/component
import Plan from "../../Plan"; // plasmic-import: qdfHE4SfDf13cF/component
import Bullet from "../../Bullet"; // plasmic-import: mgL5fo4L0Nj28c/component
import Button from "../../Button"; // plasmic-import: mRaKtmqnaNhtfA/component
import Faq from "../../Faq"; // plasmic-import: KQPbTxv5Ryq_jN/component
import Footer from "../../Footer"; // plasmic-import: lR1Mp_bm33OCc/component

import { useScreenVariants as useScreenVariants_0Vz273XwlgvZup } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 0vz273XwlgvZup/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: 94js2uNtUqpbuto4RjVnjs/projectcss
import sty from "./PlasmicPricing.module.css"; // plasmic-import: TmI4XX8M7CB1Bi/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: gOR-aQ2ASZZYNh/icon

export type PlasmicPricing__VariantMembers = {};
export type PlasmicPricing__VariantsArgs = {};
type VariantPropType = keyof PlasmicPricing__VariantsArgs;
export const PlasmicPricing__VariantProps = new Array<VariantPropType>();

export type PlasmicPricing__ArgsType = {};
type ArgPropType = keyof PlasmicPricing__ArgsType;
export const PlasmicPricing__ArgProps = new Array<ArgPropType>();

export type PlasmicPricing__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  pricingSection?: p.Flex<typeof Section>;
  columns?: p.Flex<"div">;
  faqSection?: p.Flex<typeof Section>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultPricingProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    await promise;
  });

function PlasmicPricing__RenderFunc(props: {
  variants: PlasmicPricing__VariantsArgs;
  args: PlasmicPricing__ArgsType;
  overrides: PlasmicPricing__OverridesType;

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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"pricingSection"}
            data-plasmic-override={overrides.pricingSection}
            className={classNames("__wab_instance", sty.pricingSection)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"Pricing"}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__nmIO)}>
                <Plan
                  className={classNames("__wab_instance", sty.plan__j8TUz)}
                  price={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tJUxH
                      )}
                    >
                      {"$10"}
                    </div>
                  }
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__xXb4)}
                    color={"outlineBlue" as const}
                  >
                    {"Get started"}
                  </Button>
                </Plan>
              </div>

              <div className={classNames(projectcss.all, sty.column___3YnsD)}>
                <Plan
                  className={classNames("__wab_instance", sty.plan__jzwd)}
                  description={
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___38UnS
                      )}
                    >
                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__yjCn9
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet___7DvN
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__iAgOv
                        )}
                      />

                      <Bullet
                        className={classNames(
                          "__wab_instance",
                          sty.bullet__ya8Qe
                        )}
                      />
                    </p.Stack>
                  }
                  name={"Team"}
                  price={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__owCra
                      )}
                    >
                      {"$49"}
                    </div>
                  }
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__cYoDy)}
                    color={"blue" as const}
                  >
                    {"Get started"}
                  </Button>
                </Plan>
              </div>

              <div className={classNames(projectcss.all, sty.column___0HAZa)}>
                <Plan
                  className={classNames("__wab_instance", sty.plan__hq9Pn)}
                  name={"Enterprise"}
                  price={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__amwG
                      )}
                    >
                      {"$199"}
                    </div>
                  }
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__tjDzD)}
                    color={"outlineBlue" as const}
                  >
                    {"Get started"}
                  </Button>
                </Plan>
              </div>
            </p.Stack>
          </Section>

          <Section
            data-plasmic-name={"faqSection"}
            data-plasmic-override={overrides.faqSection}
            className={classNames("__wab_instance", sty.faqSection)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"FAQ"}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___6Tptd)}
            >
              <Faq
                className={classNames("__wab_instance", sty.faq__nZirE)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Are there long-term contracts?"}
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq__dvCjw)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Can I add or remove licenses?"}
              </Faq>

              <Faq
                className={classNames("__wab_instance", sty.faq___5BFz)}
                slot={
                  "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
                }
              >
                {"Do you offer refunds?"}
              </Faq>
            </p.Stack>
          </Section>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "pricingSection", "columns", "faqSection", "footer"],
  header: ["header"],
  pricingSection: ["pricingSection", "columns"],
  columns: ["columns"],
  faqSection: ["faqSection"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  pricingSection: typeof Section;
  columns: "div";
  faqSection: typeof Section;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPricing__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPricing__VariantsArgs;
    args?: PlasmicPricing__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPricing__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPricing__ArgsType,
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
          internalArgPropNames: PlasmicPricing__ArgProps,
          internalVariantPropNames: PlasmicPricing__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPricing__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPricing";
  } else {
    func.displayName = `PlasmicPricing.${nodeName}`;
  }
  return func;
}

export const PlasmicPricing = Object.assign(
  // Top-level PlasmicPricing renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pricingSection: makeNodeComponent("pricingSection"),
    columns: makeNodeComponent("columns"),
    faqSection: makeNodeComponent("faqSection"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicPricing
    internalVariantProps: PlasmicPricing__VariantProps,
    internalArgProps: PlasmicPricing__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPricing;
/* prettier-ignore-end */
