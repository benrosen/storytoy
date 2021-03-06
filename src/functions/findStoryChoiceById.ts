import { Choice } from "types/Choice";
import { Story } from "types/Story";

/**
 * Finds the first {@link Choice} in the {@link Story} whose `id` matches the provided `id`. Returns `undefined` if no matching {@link Choice} can be found.
 *
 * @param {string} choiceId - The id of the {@link Choice} to find.
 * @param {Story} story - The collection of {@link Choice} data to search.
 *
 * @returns {Choice}
 */
export const findStoryChoiceById = (
  choiceId: string,
  story: Story
): Choice | undefined => {
  if (story.length === 0) {
    throw "This Story doesn't have any Choice objects.";
  }
  if (!choiceId) {
    return story[0];
  }
  return story.find((choice) => {
    return choice.id === choiceId;
  });
};
