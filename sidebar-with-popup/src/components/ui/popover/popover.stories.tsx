import CmsAiSection from "../../cms-ai-section/cms-ai-section";
import StrengthIndicator from "../../strength-indicator/strength-indicator";
import Input from "../input/input";
import Popover from "./popover";

export default {
  title: "UI/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export const WithHeaderBodyAndFooter = {
  args: {
    headline: "Tagi",
  },
  render: () => (
    <Popover headline="Tagi" open={true} onClose={() => {}}>
      <Popover.Header>
        <Input
          type="text"
          value=""
          onChange={() => {}}
          isSearching={false}
          placeholder="Wyszukaj grupę lub tag"
          onInputClear={() => {}}
          showClearButton={true}
          showSearchIcon={true}
        />
      </Popover.Header>

      <Popover.Body>
        <CmsAiSection />
      </Popover.Body>

      <Popover.Footer>
        <StrengthIndicator strength={2} />
      </Popover.Footer>
    </Popover>
  ),
};

export const WithHeaderAndFooter = {
  args: {
    headline: "Tagi",
  },
  render: () => (
    <Popover headline="Tagi" open={true} onClose={() => {}}>
      <Popover.Header>
        <Input
          type="text"
          value=""
          onChange={() => {}}
          isSearching={false}
          placeholder="Wyszukaj grupę lub tag"
          onInputClear={() => {}}
          showClearButton={true}
          showSearchIcon={true}
        />
      </Popover.Header>

      <Popover.Footer>
        <StrengthIndicator strength={2} />
      </Popover.Footer>
    </Popover>
  ),
};

export const HeaderOnly = {
  args: {
    headline: "Tagi",
  },
  render: () => (
    <Popover headline="Tagi" open={true} onClose={() => {}}>
      <Popover.Header>
        <Input
          type="text"
          value=""
          onChange={() => {}}
          isSearching={false}
          placeholder="Wyszukaj grupę lub tag"
          onInputClear={() => {}}
          showClearButton={true}
          showSearchIcon={true}
        />
      </Popover.Header>
    </Popover>
  ),
};

export const FooterOnly = {
  args: {
    headline: "Tagi",
  },
  render: (args: any) => (
    <Popover headline={args.headline} open={true} onClose={() => {}}>
      <Popover.Footer>
        <StrengthIndicator strength={2} />
      </Popover.Footer>
    </Popover>
  ),
};

export const WithOpenAsFalse = {
  args: {
    headline: "Tagi",
  },
  render: () => (
    <Popover headline="Tagi" open={false} onClose={() => {}}>
      <Popover.Header>
        <Input
          type="text"
          value=""
          onChange={() => {}}
          isSearching={false}
          placeholder="Wyszukaj grupę lub tag"
          onInputClear={() => {}}
          showClearButton={true}
          showSearchIcon={true}
        />
      </Popover.Header>

      <Popover.Body>
        <CmsAiSection />
      </Popover.Body>

      <Popover.Footer>
        <StrengthIndicator strength={2} />
      </Popover.Footer>
    </Popover>
  ),
};
