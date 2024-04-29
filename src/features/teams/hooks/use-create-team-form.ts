/** @format */

import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { getErrorResponseMessage } from "@/api";
import { useForm, UseFormReturn } from "@/library/form";
import { useToasts } from "@/library/toasts";
import { useDashboardLinks } from "@/features/dashboard";
import { useCreateTeamMutation } from "../services";
import { UseCreateTeamFormProps } from "./types";

export const useCreateTeamForm = ({
  organizationId,
}: UseCreateTeamFormProps): UseFormReturn => {
  // Initializes component's states, hooks and etc.
  const navigate = useNavigate();
  const links = useDashboardLinks();
  const toasts = useToasts();
  return useForm({
    values: {
      name: "",
      description: "",
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
    useMutation: useCreateTeamMutation(
      { organizationId },
      {
        onMutate: () => {
          toasts.showToast({
            id: "create-team",
            variant: "loading",
            message: t("Creating team, please wait"),
          });
        },
        onSuccess: ({ teamId }) => {
          navigate(`${links.teams}/${teamId}`);
          toasts.showToast({
            id: "create-team",
            variant: "success",
            message: t("Team has been created successfully"),
          });
        },
        onError: (error) => {
          const message = getErrorResponseMessage({ error });
          toasts.showToast({
            id: "create-team",
            variant: "danger",
            message: t(message),
          });
        },
      }
    ),
  });
};
