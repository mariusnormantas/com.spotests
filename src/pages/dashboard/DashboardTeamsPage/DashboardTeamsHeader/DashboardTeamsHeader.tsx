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
import { CreateTeamModal, useTeamsListingContext } from "@/features/teams";

const _DashboardTeamsHeader: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const params = useParams();
  const modals = useModals();
  const { organization } = useOrganizationViewContext();
  const context = useTeamsListingContext();
  const [search, setSearch] = useDebounceState(
    context.search,
    context.setSearch
  );

  // Memoized state, of allowed roles to create a team.
  const allowedRolesToCreateTeam = React.useMemo(() => {
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
      <AuthRoleGuard roles={allowedRolesToCreateTeam}>
        <Button
          variant="primary"
          iconStart={PiPlusBold}
          onClick={() => {
            modals.showModal(
              <CreateTeamModal
                organizationId={params.organizationId}
                organizationName={organization?.name}
              />
            );
          }}>
          {t("New team")}
        </Button>
      </AuthRoleGuard>
    </React.Fragment>
  );
};

export const DashboardTeamsHeader = React.memo(_DashboardTeamsHeader);
DashboardTeamsHeader.displayName = "@/pages/DashboardTeamsHeader";
