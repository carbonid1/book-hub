import { ISelect, Select } from 'components/@controls/Select';
import { Toggle } from 'components/@controls/Toggle';
import { useState } from 'react';
import type { IBook, IEdition } from 'types/interfaces';
import formatDate from 'utils/formatDate';
import hooks from './hooks';
import queries from './queries';

export interface IBookReviews {
  bookId: IBook['id'];
  editionId: IEdition['id'];
}

export const BookReviews: React.FC<IBookReviews> = ({ bookId, editionId }) => {
  const [thisEditionOnly, setThisEditionOnly] = useState(false);
  const [lang, setLang] = useState<ISelect<string | null>['value']>(null);
  const { reviews } = queries.useReviewsQuery({ bookId, editionId: thisEditionOnly ? editionId : null, lang });
  const langOptions = hooks.useLangOptions(reviews);

  return (
    <div>
      <div className="font-bold text-2xl py-4">Reviews:</div>
      <div className="flex gap-x-4">
        <Select options={langOptions} value={lang} onChange={setLang} />
        <Toggle isChecked={thisEditionOnly} onChange={setThisEditionOnly} label="This Edition Only" />
      </div>
      <div className="grid gap-2 mt-4">
        {reviews.map(review => (
          <div key={review.id}>
            <div>{formatDate(review.createdAt)}</div>
            <div>{review.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
