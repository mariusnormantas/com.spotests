/** @format */

import { SectionInit } from "./SectionInit";
import { SectionHeader } from "./SectionHeader";
import { SectionHelper } from "./SectionHelper";
import { SectionComponent } from "./types";

export const Section: SectionComponent = ({ children }) => children;
Section.displayName = "@/library/core/Section";

Section.Init = SectionInit;
Section.Header = SectionHeader;
Section.Helper = SectionHelper;
