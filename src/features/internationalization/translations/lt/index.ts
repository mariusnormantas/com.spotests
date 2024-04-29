/** @format */

import auth from "./auth.json";
import common from "./common.json";
import account from "./account.json";
import validations from "./validations.json";
import errors from "./errors.json";

// Contexts.
import organization from "./organization.json";
import team from "./team.json";
import trainer from "./trainer.json";
import athlete from "./athlete.json";
import testing from "./testing.json";
import interaction from "./interaction.json";

export const lt = {
  ...auth,
  ...common,
  ...account,
  ...validations,
  ...errors,
  // Contexts.
  ...organization,
  ...team,
  ...trainer,
  ...athlete,
  ...testing,
  ...interaction,
};
