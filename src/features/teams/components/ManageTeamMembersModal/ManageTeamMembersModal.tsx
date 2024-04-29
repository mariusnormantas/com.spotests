/** @format */

import React from "react";
import { PiSneakerMoveDuotone, PiBaseballCapDuotone } from "react-icons/pi";
import { t } from "i18next";
import { Button, Tabs } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import {
  ManageAthletesListingProvider,
  ManageTrainersListingProvider,
} from "../../contexts";
import { useEditTeamMembersForm } from "../../hooks";
import { ManageTrainersListing } from "../ManageTrainersListing";
import { ManageAthletesListing } from "../ManageAthletesListing";
import { ManageTeamMembersModalProps } from "./types";

export const ManageTeamMembersModal: React.FC<ManageTeamMembersModalProps> = ({
  teamId,
  teamName,
  initialTab = "trainers",
}) => {
  // Initializes component's states, hooks and etc.
  const form = useEditTeamMembersForm({
    teamId,
  });

  return (
    <Modal.Init size="large" disabled={form.isSubmitting}>
      <Modal.Header
        title={t("Manage members of team")}
        description={teamName}
      />
      <Tabs.Init defaultValue={initialTab}>
        <Tabs.List>
          <Tabs.Item value="trainers" icon={PiBaseballCapDuotone}>
            {t("Trainers")}
          </Tabs.Item>
          <Tabs.Item value="athletes" icon={PiSneakerMoveDuotone}>
            {t("Athletes")}
          </Tabs.Item>
        </Tabs.List>
        <Modal.Body>
          <Form.Init form={form}>
            <Tabs.Panel value="trainers">
              <ManageTrainersListingProvider teamId={teamId}>
                <ManageTrainersListing
                  bodySize={8}
                  isLoading={form.isSubmitting}
                  syncSelected={(selected) => {
                    const value = selected.flatMap((doc) => doc._id);
                    form.handleChange("trainers", value);
                  }}
                />
              </ManageTrainersListingProvider>
            </Tabs.Panel>
            <Tabs.Panel value="athletes">
              <ManageAthletesListingProvider teamId={teamId}>
                <ManageAthletesListing
                  bodySize={8}
                  isLoading={form.isSubmitting}
                  syncSelected={(selected) => {
                    const value = selected.flatMap((doc) => doc._id);
                    form.handleChange("athletes", value);
                  }}
                />
              </ManageAthletesListingProvider>
            </Tabs.Panel>
          </Form.Init>
        </Modal.Body>
      </Tabs.Init>
      <Modal.Footer>
        <Button
          type="submit"
          form={form.id}
          variant="primary"
          loading={form.isSubmitting}
          disabled={!form.isValid}>
          {t("Save")}
        </Button>
      </Modal.Footer>
    </Modal.Init>
  );
};
