/** @format */

import * as Yup from "yup";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useModals } from "@/library/modals";
import { useEditTeamMutation } from "../services";
import { UseEditTeamFormProps } from "./types";

export const useEditTeamForm = ({
  team,
}: UseEditTeamFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const toasts = useToasts();
  const modals = useModals();
  return useForm({
    values: {
      name: team.name,
      description: team.description,
    },
    validation: Yup.object().shape({
      name: Yup.string()
        .min(2, t("Name should contain between 2 and 64 symbols"))
        .max(64, t("Name should contain between 2 and 64 symbols")),
      description: Yup.string().max(
        250,
        t("Description should be up to 250 symbols")
      ),
    }),
    useMutation: useEditTeamMutation(
      { teamId: team._id, organizationId: team.organization._id },
      {
        onMutate: () => {
          toasts.showToast({
            id: "edit-team",
            variant: "loading",
            message: t("Updating team's information, please wait"),
          });
        },
        onSuccess: () => {
          modals.hideModal();
          toasts.showToast({
            id: "edit-team",
            variant: "success",
            message: t("Team has been updated successfully"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "edit-team",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
};
