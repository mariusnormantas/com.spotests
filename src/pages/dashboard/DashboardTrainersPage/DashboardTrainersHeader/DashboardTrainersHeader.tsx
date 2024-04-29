/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import { PiPlusBold } from "react-icons/pi";
import { t } from "i18next";
import { Button, SearchInput } from "@/library/core";
import { useModals } from "@/library/modals";
import { useDebounceState } from "@/library/hooks";
import { AuthRoleGuard } from "@/features/auth";
import { useOrganizationViewContext } from "@/features/organizations";
import {
  CreateTrainerModal,
  useTrainersListingContext,
} from "@/features/trainers";

const _DashboardTrainersHeader: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const params = useParams();
  const modals = useModals();
  const context = useTrainersListingContext();
  const { organization } = useOrganizationViewContext();
  const [search, setSearch] = useDebounceState(
    context.search,
    context.setSearch
  );

  // Memoized state, of allowed roles to create a trainer.
  const allowedRolesToCreateTrainer = React.useMemo(() => {
    const allowedRoles = ["organization"];
    params.organizationId && allowedRoles.push("admin");
    return allowedRoles as Array<"organization" | "admin">;
  }, [params.organizationId]);

  return (
    <React.Fragment>
      <SearchInput
        value={search}
        placeholder={t("Search")}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
      <AuthRoleGuard roles={allowedRolesToCreateTrainer}>
        <Button
          variant="primary"
          iconStart={PiPlusBold}
          onClick={() =>
            modals.showModal(
              <CreateTrainerModal
                organizationId={params.organizationId}
                organizationName={organization?.name}
              />
            )
          }>
          {t("New trainer")}
        </Button>
      </AuthRoleGuard>
    </React.Fragment>
  );
};

export const DashboardTrainersHeader = React.memo(_DashboardTrainersHeader);
DashboardTrainersHeader.displayName = "@/pages/DashboardTrainersHeader";
