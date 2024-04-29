/** @format */

import React from "react";
import { format } from "date-fns";
import { t } from "i18next";
import { Avatar, Card, Text } from "@/library/core";
import { OrganizationGeneralDataWidgetProps } from "./types";
import * as sc from "./OrganizationGeneralDataWidget.styled";

export const OrganizationGeneralDataWidget: React.FC<
  OrganizationGeneralDataWidgetProps
> = ({ organization }) => {
  // Memoized formatted created at date.
  const createdAt = React.useMemo(() => {
    return format(new Date(organization.createdAt), "yyyy-MM-dd, HH:mm");
  }, [organization]);

  // Memoized formatted verified at date or not verified.
  const verifiedAt = React.useMemo(() => {
    if (!organization.verifiedAt) {
      return t("Not verified");
    }
    return format(new Date(organization.verifiedAt), "yyyy-MM-dd, HH:mm");
  }, [organization]);

  return (
    <Card.Init variant="primary">
      <sc.Account>
        <Avatar />
        <div>
          <Text.Body1 weight="strong">{`${t("Name")}:`}</Text.Body1>
          <Text.Subtitle1 color="title" weight="stronger">
            {organization.name}
          </Text.Subtitle1>
        </div>
      </sc.Account>
      <sc.Container>
        <Card.List>
          <Card.Item
            title={`${t("Email address")}:`}
            description={t("Email address is used to login to the account")}>
            {organization.email}
          </Card.Item>
          <Card.Item
            title={`${t("Lock")}:`}
            description={t(
              "Lock status indicates whether the account can be used"
            )}>
            {organization.locked ? t("Locked") : t("Unlocked")}
          </Card.Item>
        </Card.List>
        <Card.List>
          <Card.Item
            title={`${t("Created at")}:`}
            description={t("Account creation date")}>
            {createdAt}
          </Card.Item>
          <Card.Item
            title={`${t("Verified at")}:`}
            description={t(
              "User's first login date, when email address were verified"
            )}>
            {verifiedAt}
          </Card.Item>
        </Card.List>
      </sc.Container>
    </Card.Init>
  );
};
