'use client'

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import React, { useEffect } from 'react'
import { useBoardStore } from '@/store/BoardStore';

function Board() {
    const getBoard = useBoardStore((state) => state.getBoard);
    useEffect(() => {
        getBoard();
    },[getBoard]);

  return (
    <h1>Hellloooo</h1>
    // <DragDropContext>
    //     <Droppable droppableId='board' direction='horizontal' type='column'>
    //         {(provided) => (
    //             <div>
    //                 {/* rendering all the main boards/colums */}
    //             </div>
    //         )}
    //     </Droppable>
    // </DragDropContext>
  );
};

export default Board;