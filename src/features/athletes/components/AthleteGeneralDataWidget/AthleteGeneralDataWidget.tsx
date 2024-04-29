/** @format */

import React from "react";
import { format } from "date-fns";
import { t } from "i18next";
import { Avatar, Badge, Card, Text } from "@/library/core";
import { AthleteGeneralDataWidgetProps } from "./types";
import * as sc from "./AthleteGeneralDataWidget.styled";

export const AthleteGeneralDataWidget: React.FC<
  AthleteGeneralDataWidgetProps
> = ({ athlete }) => {
  // Memoized formatted created at date.
  const createdAt = React.useMemo(() => {
    return format(new Date(athlete.createdAt), "yyyy-MM-dd, HH:mm");
  }, [athlete]);

  // Memoized formatted verified at date or not verified.
  const verifiedAt = React.useMemo(() => {
    if (!athlete.verifiedAt) {
      return t("Not verified");
    }
    return format(new Date(athlete.verifiedAt), "yyyy-MM-dd, HH:mm");
  }, [athlete]);

  // Checks, if athlete is fetched and defined.
  if (!athlete) return null;
  return (
    <Card.Init variant="primary">
      <sc.Account>
        <Avatar />
        <div>
          <Text.Body1 weight="strong">{`${t("Name")}:`}</Text.Body1>
          <Text.Subtitle1 color="title" weight="stronger">
            {athlete.name}
          </Text.Subtitle1>
        </div>
      </sc.Account>
      <sc.Grid>
        <Card.List>
          <Card.Item
            title={`${t("Email address")}:`}
            description={t("Email address is used to login to the account")}>
            {athlete.email}
          </Card.Item>
          <Card.Item
            title={`${t("Lock")}:`}
            description={t(
              "Lock status indicates whether the account can be used"
            )}>
            {athlete.locked ? t("Locked") : t("Unlocked")}
            {athlete.organization.locked && (
              <Badge variant="danger">{`${t("Organization")}: ${t(
                "Locked"
              ).toLowerCase()}`}</Badge>
            )}
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
      </sc.Grid>
    </Card.Init>
  );
};
