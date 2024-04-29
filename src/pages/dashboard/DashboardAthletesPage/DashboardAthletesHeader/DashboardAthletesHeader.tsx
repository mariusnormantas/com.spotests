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
  CreateAthleteModal,
  useAthletesListingContext,
} from "@/features/athletes";

const _DashboardAthletesHeader: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const params = useParams();
  const modals = useModals();
  const context = useAthletesListingContext();
  const { organization } = useOrganizationViewContext();
  const [search, setSearch] = useDebounceState(
    context.search,
    context.setSearch
  );

  // Memoized state, of allowed roles to create an athlete.
  const allowedRolesToCreateAthlete = React.useMemo(() => {
    const allowedRoles = ["organization"];
    params.organizationId && allowedRoles.push("admin");
    return allowedRoles as Array<"organization" | "admin">;
  }, [params.organizationId]);

  return (
    <React.Fragment>
      <SearchInput
        value={search}
        placeholder={t("Search")}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
        }}
      />
      <AuthRoleGuard roles={allowedRolesToCreateAthlete}>
        <Button
          variant="primary"
          iconStart={PiPlusBold}
          onClick={() => {
            modals.showModal(
              <CreateAthleteModal
                organizationId={params.organizationId}
                organizationName={organization?.name}
              />
            );
          }}>
          {t("New athlete")}
        </Button>
      </AuthRoleGuard>
    </React.Fragment>
  );
};

export const DashboardAthletesHeader = React.memo(_DashboardAthletesHeader);
DashboardAthletesHeader.displayName = "@/pages/DashboardAthletesHeader";
