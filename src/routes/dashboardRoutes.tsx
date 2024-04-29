/** @format */

import { Route } from "react-router-dom";
import { DashboardLayout } from "@/layouts";
import {
  DashboardOrganizationPage,
  DashboardOrganizationGeneralPanel,
  DashboardOrganizationInteractionsPanel,
  DashboardOrganizationsPage,
  DashboardTeamPage,
  DashboardTeamsPage,
  DashboardTrainerPage,
  DashboardTrainersPage,
  DashboardTeamGeneralPanel,
  DashboardTeamInteractionsPanel,
  DashboardTrainerGeneralPanel,
  DashboardTrainerInteractionsPanel,
  DashboardAthletesPage,
  DashboardAthletePage,
  DashboardAthleteGeneralPanel,
  DashboardAthleteInteractionsPanel,
  DashboardAthleteTestingsPanel,
  DashboardAthleteVisualizationPanel,
  DashboardHomePage,
  DashboardHomeAthleteTestingsPanel,
  DashboardHomeAthleteVisualizationPanel,
} from "@/pages";
import { DashboardProvider } from "@/features/dashboard";
import { AuthRouteGuard, RedirectAuthenticated } from "@/features/auth";
import {
  OrganizationViewProvider,
  OrganizationsListingProvider,
} from "@/features/organizations";
import { TeamViewProvider, TeamsListingProvider } from "@/features/teams";
import {
  TrainerViewProvider,
  TrainersListingProvider,
} from "@/features/trainers";
import {
  AthleteViewProvider,
  AthletesListingProvider,
} from "@/features/athletes";
import {
  TestingsSummaryProvider,
  TestingsVisualizationProvider,
} from "@/features/testings";

export const dashboardRoutes = (
  <Route element={<DashboardProvider />}>
    <Route element={<AuthRouteGuard type="user" />}>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<RedirectAuthenticated />} />
        {/* HOME */}
        <Route element={<AuthRouteGuard type="user" roles={["athlete"]} />}>
          <Route path="app" element={<DashboardHomePage />}>
            {/* Temporary, until "Home" is not available. */}
            <Route index element={<RedirectAuthenticated />} />
            {/* HOME (ATHLETE) */}
            <Route element={<AuthRouteGuard type="user" roles={["athlete"]} />}>
              <Route element={<TestingsVisualizationProvider />}>
                <Route
                  path="testings"
                  element={<DashboardHomeAthleteTestingsPanel />}
                />
                <Route element={<TestingsSummaryProvider />}>
                  <Route
                    path="visualization"
                    element={<DashboardHomeAthleteVisualizationPanel />}
                  />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route element={<AuthRouteGuard type="user" roles={["admin"]} />}>
          {/* ORGANIZATIONS */}
          <Route
            path="organizations"
            element={<OrganizationsListingProvider />}>
            <Route index element={<DashboardOrganizationsPage />} />
          </Route>
          {/* ORGANIZATION (PANELS) */}
          <Route element={<OrganizationViewProvider />}>
            <Route
              path="organizations/:organizationId"
              element={<DashboardOrganizationPage />}>
              <Route index element={<DashboardOrganizationGeneralPanel />} />
              <Route
                path="interactions"
                element={<DashboardOrganizationInteractionsPanel />}
              />
            </Route>
            <Route
              path="organizations/:organizationId"
              element={<OrganizationViewProvider />}>
              {/* ORGANIZATION - TEAMS */}
              <Route element={<TeamsListingProvider />}>
                <Route path="teams" element={<DashboardTeamsPage />} />
              </Route>
              {/* ORGANIZATION - TEAM (PANELS) */}
              <Route element={<TeamViewProvider />}>
                <Route path="teams/:teamId" element={<DashboardTeamPage />}>
                  <Route index element={<DashboardTeamGeneralPanel />} />
                  <Route
                    path="interactions"
                    element={<DashboardTeamInteractionsPanel />}
                  />
                </Route>
              </Route>
              {/* ORGANIZATION - TEAM */}
              <Route path="teams/:teamId" element={<TeamViewProvider />}>
                <Route index element={<DashboardTeamPage />} />
                {/* ORGANIZATION - TEAM - TRAINERS */}
                <Route element={<TrainersListingProvider />}>
                  <Route path="trainers" element={<DashboardTrainersPage />} />
                </Route>
                {/* ORGANIZATION - TEAM - TRAINER */}
                <Route element={<TrainerViewProvider />}>
                  <Route
                    path="trainers/:trainerId"
                    element={<DashboardTrainerPage />}>
                    <Route index element={<DashboardTrainerGeneralPanel />} />
                    <Route
                      path="interactions"
                      element={<DashboardTrainerInteractionsPanel />}
                    />
                  </Route>
                </Route>
                {/* ORGANIZATION - TEAM - ATHLETES */}
                <Route element={<AthletesListingProvider />}>
                  <Route path="athletes" element={<DashboardAthletesPage />} />
                </Route>
                {/* ORGANIZATION - TEAM - ATHLETE */}
                <Route element={<AthleteViewProvider />}>
                  <Route
                    path="athletes/:athleteId"
                    element={<DashboardAthletePage />}>
                    <Route index element={<DashboardAthleteGeneralPanel />} />
                    <Route element={<TestingsVisualizationProvider />}>
                      <Route
                        path="testings"
                        element={<DashboardAthleteTestingsPanel />}
                      />
                      <Route element={<TestingsSummaryProvider />}>
                        <Route
                          path="visualization"
                          element={<DashboardAthleteVisualizationPanel />}
                        />
                      </Route>
                    </Route>
                    <Route
                      path="interactions"
                      element={<DashboardAthleteInteractionsPanel />}
                    />
                  </Route>
                </Route>
              </Route>
              {/* ORGANIZATION - TRAINERS */}
              <Route element={<TrainersListingProvider />}>
                <Route path="trainers" element={<DashboardTrainersPage />} />
              </Route>
              {/* ORGANIZATION - TRAINER */}
              <Route element={<TrainerViewProvider />}>
                <Route
                  path="trainers/:trainerId"
                  element={<DashboardTrainerPage />}>
                  <Route index element={<DashboardTrainerGeneralPanel />} />
                  <Route
                    path="interactions"
                    element={<DashboardTrainerInteractionsPanel />}
                  />
                </Route>
              </Route>
              {/* ORGANIZATION - ATHLETES */}
              <Route element={<AthletesListingProvider />}>
                <Route path="athletes" element={<DashboardAthletesPage />} />
              </Route>
              {/* ORGANIZATION - ATHLETE */}
              <Route element={<AthleteViewProvider />}>
                <Route
                  path="athletes/:athleteId"
                  element={<DashboardAthletePage />}>
                  <Route index element={<DashboardAthleteGeneralPanel />} />
                  <Route element={<TestingsVisualizationProvider />}>
                    <Route
                      path="testings"
                      element={<DashboardAthleteTestingsPanel />}
                    />
                    <Route element={<TestingsSummaryProvider />}>
                      <Route
                        path="visualization"
                        element={<DashboardAthleteVisualizationPanel />}
                      />
                    </Route>
                  </Route>
                  <Route
                    path="interactions"
                    element={<DashboardAthleteInteractionsPanel />}
                  />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route
          element={
            <AuthRouteGuard
              type="user"
              roles={["admin", "organization", "trainer"]}
            />
          }>
          {/* ATHLETES */}
          <Route element={<AthletesListingProvider />}>
            <Route path="athletes" element={<DashboardAthletesPage />} />
          </Route>
          {/* ATHLETE (PANELS) */}
          <Route element={<AthleteViewProvider />}>
            <Route
              path="athletes/:athleteId"
              element={<DashboardAthletePage />}>
              <Route index element={<DashboardAthleteGeneralPanel />} />
              <Route element={<TestingsVisualizationProvider />}>
                <Route
                  path="testings"
                  element={<DashboardAthleteTestingsPanel />}
                />
                <Route element={<TestingsSummaryProvider />}>
                  <Route
                    path="visualization"
                    element={<DashboardAthleteVisualizationPanel />}
                  />
                </Route>
              </Route>
              <Route
                path="interactions"
                element={<DashboardAthleteInteractionsPanel />}
              />
            </Route>
          </Route>
          <Route
            element={
              <AuthRouteGuard
                type="user"
                roles={["admin", "organization", "trainer"]}
              />
            }>
            {/* TEAMS */}
            <Route element={<TeamsListingProvider />}>
              <Route path="teams" element={<DashboardTeamsPage />} />
            </Route>
            {/* TEAM (PANELS) */}
            <Route element={<TeamViewProvider />}>
              <Route path="teams/:teamId" element={<DashboardTeamPage />}>
                <Route index element={<DashboardTeamGeneralPanel />} />
                <Route
                  path="interactions"
                  element={<DashboardTeamInteractionsPanel />}
                />
              </Route>
            </Route>
            {/* TEAM - TRAINERS / ATHLETES */}
            <Route path="teams/:teamId" element={<TeamViewProvider />}>
              <Route index element={<DashboardTeamPage />} />
              {/* TEAM - TRAINERS */}
              <Route element={<TrainersListingProvider />}>
                <Route path="trainers" element={<DashboardTrainersPage />} />
              </Route>
              {/* TEAM - TRAINER */}
              <Route element={<TrainerViewProvider />}>
                <Route
                  path="trainers/:trainerId"
                  element={<DashboardTrainerPage />}>
                  <Route index element={<DashboardTrainerGeneralPanel />} />
                  <Route
                    path="interactions"
                    element={<DashboardTrainerInteractionsPanel />}
                  />
                </Route>
              </Route>
              {/* TEAM - ATHLETES */}
              <Route element={<AthletesListingProvider />}>
                <Route path="athletes" element={<DashboardAthletesPage />} />
              </Route>
              {/* TEAM - ATHLETE */}
              <Route element={<AthleteViewProvider />}>
                <Route
                  path="athletes/:athleteId"
                  element={<DashboardAthletePage />}>
                  <Route index element={<DashboardAthleteGeneralPanel />} />
                  <Route element={<TestingsVisualizationProvider />}>
                    <Route
                      path="testings"
                      element={<DashboardAthleteTestingsPanel />}
                    />
                    <Route element={<TestingsSummaryProvider />}>
                      <Route
                        path="visualization"
                        element={<DashboardAthleteVisualizationPanel />}
                      />
                    </Route>
                  </Route>
                  <Route
                    path="interactions"
                    element={<DashboardAthleteInteractionsPanel />}
                  />
                </Route>
              </Route>
            </Route>
            {/* TRAINERS */}
            <Route element={<TrainersListingProvider />}>
              <Route path="trainers" element={<DashboardTrainersPage />} />
            </Route>
            {/* TRAINER (PANELS) */}
            <Route element={<TrainerViewProvider />}>
              <Route
                path="trainers/:trainerId"
                element={<DashboardTrainerPage />}>
                <Route index element={<DashboardTrainerGeneralPanel />} />
                <Route
                  path="interactions"
                  element={<DashboardTrainerInteractionsPanel />}
                />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <p>We're sorry, but we couldn't find what you're looking for!</p>
          }
        />
      </Route>
    </Route>
  </Route>
);
