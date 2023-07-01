import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import React from 'react'

function Board() {
  return (
    <DragDropContext>
        <Droppable droppableId='board' direction='horizontal' type='column'>
            {(provided) => (
                <div>
                    {/* rendering all the main boards/colums */}
                </div>
            )}
        </Droppable>
    </DragDropContext>
  )
}

export default Board