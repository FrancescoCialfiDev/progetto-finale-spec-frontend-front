
import { motion } from "framer-motion"
import { p } from "framer-motion/m"



export const TableComponent = ({ overlayTxt, arr, navigate, onSelectGame, onClick }) => {
    return (
        <motion.table
            initial={{ opacity: 0.5, x: -100, y: -150 }}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            className="w-100 overflow-scroll"
        >
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {arr.map(game =>
                    <tr key={game.id}>
                        <td style={{ display: "flex" }}>{game.title}</td>
                        <td>{game.category}</td>
                        {
                            navigate ?
                                <td
                                    role="button"
                                    onClick={() => onClick(game.id)}
                                    className="overlay text-center"
                                >{overlayTxt}</td>
                                :
                                <td
                                    onClick={() => { onSelectGame(game.id) }}
                                    className="overlay text-center"
                                    role="button">{overlayTxt}</td>
                        }
                    </tr>
                )}
            </tbody>
        </motion.table>
    )
}