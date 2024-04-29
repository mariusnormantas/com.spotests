/** @format */

export type AuthRouteGuardProps = {
  type: "user" | "guest";
  roles?: Array<"admin" | "organization" | "trainer" | "athlete">;
};
