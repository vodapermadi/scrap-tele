import Layouts from '@/components/Layouts';
import React from 'react';

const formScrap = () => {
  return (
    <>
      <Layouts>
        <form>
          <div className="mb-3">
            <select>
              {dataGroup.map((row) => {
                <option value=""></option>;
              })}
            </select>
          </div>
        </form>
      </Layouts>
    </>
  );
};

export default formScrap;
