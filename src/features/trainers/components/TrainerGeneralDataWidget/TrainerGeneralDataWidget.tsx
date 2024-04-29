/** @format */

import React from "react";
import { format } from "date-fns";
import { t } from "i18next";
import { Avatar, Badge, Card, Text } from "@/library/core";
import { TrainerGeneralDataWidgetProps } from "./types";
import * as sc from "./TrainerGeneralDataWidget.styled";

export const TrainerGeneralDataWidget: React.FC<
  TrainerGeneralDataWidgetProps
> = ({ trainer }) => {
  // Memoized formatted created at date.
  const createdAt = React.useMemo(() => {
    return format(new Date(trainer.createdAt), "yyyy-MM-dd, HH:mm");
  }, [trainer]);

  // Memoized formatted verified at date or not verified.
  const verifiedAt = React.useMemo(() => {
    if (!trainer.verifiedAt) {
      return t("Not verified");
    }
    return format(new Date(trainer.verifiedAt), "yyyy-MM-dd, HH:mm");
  }, [trainer]);

  return (
    <Card.Init variant="primary">
      <sc.Account>
        <Avatar />
        <div>
          <Text.Body1 weight="strong">{`${t("Name")}:`}</Text.Body1>
          <Text.Subtitle1 color="title" weight="stronger">
            {trainer.name}
          </Text.Subtitle1>
        </div>
      </sc.Account>
      <sc.Grid>
        <Card.List>
          <Card.Item
            title={`${t("Email address")}:`}
            description={t("Email address is used to login to the account")}>
            {trainer.email}
          </Card.Item>
          <Card.Item
            title={`${t("Lock")}:`}
            description={t(
              "Lock status indicates whether the account can be used"
            )}>
            {trainer.locked ? t("Locked") : t("Unlocked")}
            {trainer.organization.locked && (
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
