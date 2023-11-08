export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handClick} className={className}>
      {children}
    </div>
  )
}
