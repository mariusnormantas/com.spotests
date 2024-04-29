/** @format */

import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useDashboardLinks } from "@/features/dashboard";
import { useDeleteTeamMutation } from "../services";
import { UseDeleteTeamFormProps } from "./types";

export const useDeleteTeamForm = ({
  team,
}: UseDeleteTeamFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const navigate = useNavigate();
  const links = useDashboardLinks();
  const toasts = useToasts();
  return useForm({
    values: {
      name: "",
    },
    validation: Yup.object().shape({
      name: Yup.string().equals(
        [team.name],
        t("Name is not valid, please enter {{name}}", { name: team.name })
      ),
    }),
    useMutation: useDeleteTeamMutation(
      { teamId: team._id, organizationId: team.organization._id },
      {
        onMutate: () => {
          toasts.showToast({
            id: "delete-team",
            variant: "loading",
            message: t("Deleting team, please wait"),
          });
        },
        onSuccess: () => {
          navigate(links.teams);
          toasts.showToast({
            id: "delete-team",
            variant: "success",
            message: t("Team has been deleted successfully"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "delete-team",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
};
