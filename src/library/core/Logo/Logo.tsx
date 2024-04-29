/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";
import LogoSVG from "@/assets/images/logo.svg";
import { LogoProps } from "./types";
import * as sc from "./Logo.styled";

const _Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  (
    {
      to = "/",
      variant = "dark",
      size = "medium",
      title = "Spotests.com",
      description,
      ...rest
    },
    ref: React.Ref<HTMLAnchorElement>
  ) => {
    return (
      <sc.Component
        as={Link}
        ref={ref}
        to={to}
        title={"Spotests.com - " + t("Strategies for effective training")}
        {...rest}
        data-component="logo"
        $variant={variant}
        $size={size}>
        <sc.Image>
          <img
            src={LogoSVG}
            width={100}
            height={100}
            alt={t("Strategies for effective training")}
            role="img"
          />
        </sc.Image>
        {title && (
          <sc.Content>
            <sc.Title>{title}</sc.Title>
            {description && size !== "small" && (
              <sc.Description>
                {typeof description === "string"
                  ? description
                  : t("Strategies for effective training")}
              </sc.Description>
            )}
          </sc.Content>
        )}
      </sc.Component>
    );
  }
);

export const Logo = React.memo(_Logo);
Logo.displayName = "@/library/core/Logo";
