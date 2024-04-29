/** @format */

import React from "react";
import { t } from "i18next";
import { Button } from "@/library/core";
import { Modal } from "@/library/modals";
import { Form } from "@/library/form";
import { useEditAthleteDataForm } from "../../hooks";
import { EditAthleteDataModalProps } from "./types";

export const EditAthleteDataModal: React.FC<EditAthleteDataModalProps> = ({
  athlete,
}) => {
  // Initializes edit athlete form, only when athlete is defined.
  const form = useEditAthleteDataForm({ athlete });

  return (
    <Modal.Init>
      <Modal.Header title={t("Edit athlete")} description={athlete.name} />
      <Modal.Body>
        <Form.Init form={form}>
          <Form.Field
            direction="row"
            label={t("Birth date")}
            description={t("Use YYYY-MM-DD format, when entering date")}
            asterisk>
            <Form.Input
              name="birthDate"
              placeholder={t("Enter athlete's birth date")}
              spellCheck={false}
              maxLength={10}
              autoComplete="off"
              autoFocus
            />
          </Form.Field>
          <Form.Field direction="row" label={t("Height")} asterisk>
            <Form.NumberInput
              name="height"
              placeholder={`${t("Enter athlete's height")} (cm)`}
              maxLength={5}
              min={0}
              max={300}
              decimals={1}
              hideControls
            />
          </Form.Field>
          <Form.Field direction="row" label={t("Weight")} asterisk>
            <Form.NumberInput
              name="weight"
              placeholder={`${t("Enter athlete's weight")} (kg)`}
              maxLength={5}
              min={0}
              max={300}
              decimals={1}
              hideControls
            />
          </Form.Field>
        </Form.Init>
      </Modal.Body>
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
