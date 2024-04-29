/** @format */

import React from "react";
import { PiPlusBold } from "react-icons/pi";
import { t } from "i18next";
import { Button, SearchInput } from "@/library/core";
import { useModals } from "@/library/modals";
import { useDebounceState } from "@/library/hooks";
import {
  CreateOrganizationModal,
  useOrganizationsListingContext,
} from "@/features/organizations";

const _DashboardOrganizationsHeader: React.FC = () => {
  // Initializes component's states, hooks and etc.
  const { showModal } = useModals();
  const { search, setSearch } = useOrganizationsListingContext();
  const [value, setDebouncedState] = useDebounceState(search, setSearch);

  return (
    <React.Fragment>
      <SearchInput
        placeholder={t("Search")}
        value={value}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDebouncedState(e.target.value)
        }
      />
      <Button
        variant="primary"
        iconStart={PiPlusBold}
        onClick={() => showModal(<CreateOrganizationModal />)}>
        {t("New organization")}
      </Button>
    </React.Fragment>
  );
};

export const DashboardOrganizationsHeader = React.memo(
  _DashboardOrganizationsHeader
);
DashboardOrganizationsHeader.displayName =
  "@/pages/DashboardOrganizationsHeader";
