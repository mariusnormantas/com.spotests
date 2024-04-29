/** @format */

import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useModals } from "@/library/modals";
import { useEditTeamMembersMutation } from "../services";
import { UseEditTeamMembersFormProps } from "./types";

export const useEditTeamMembersForm = ({
  teamId,
}: UseEditTeamMembersFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const toasts = useToasts();
  const modals = useModals();
  return useForm({
    values: {
      trainers: [],
      athletes: [],
    },
    useMutation: useEditTeamMembersMutation(
      { teamId },
      {
        onMutate: () => {
          toasts.showToast({
            id: "edit-team-members",
            variant: "loading",
            message: t("Updating team's information, please wait"),
          });
        },
        onSuccess: () => {
          modals.hideModal();
          toasts.showToast({
            id: "edit-team-members",
            variant: "success",
            message: t("Members of team has been updated successfully"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "edit-team-members",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
};
