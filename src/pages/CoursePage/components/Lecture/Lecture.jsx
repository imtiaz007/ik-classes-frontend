/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { OndemandVideo as VideoIcon, Subject as SubjectIcon } from '@icons';
import { useRecoilValue } from 'recoil';
import { lectureState } from '@src/state/stateAtoms';
import parse from 'html-react-parser';

// eslint-disable-next-line arrow-body-style
const Lecture = ({ lecture, history }) => {
  const { id, name, desc, video, type } = lecture;
  useEffect(() => {
    history.push({ search: `lectureId=${id}` });
  }, [id]);
  return (
    <div className="flex flex-col w-full sm:w-4/5 p-5 overflow-y-auto">
      <div className="flex items-center space-x-3">
        <i className="text-gray-700">
          {type === 'video' ? (
            <VideoIcon fontSize="large" />
          ) : (
            <SubjectIcon fontSize="large" />
          )}
        </i>
        <p className="text-2xl font-bold text-gray-700">{name}</p>
      </div>
      {type === 'video' ? (
        <iframe
          // width="1296"
          // height="480"
          className="w-full h-1/2 sm:h-full pt-5 flex-none"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        ''
      )}

<<<<<<< HEAD
      <article className="prose sm:prose-xl mt-5">
        {desc ? parse(desc) : ''}
      </article>
=======
      <article className="prose sm:prose-xl mt-5">{parse(desc)}</article>
>>>>>>> aa102ef03e71585584128ecd0615074a3404c726
    </div>
  );
};

export default Lecture;
