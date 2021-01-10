import { makeStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import TreeItem from '@material-ui/lab/TreeItem'
import MuiTreeItem from '@material-ui/lab/TreeItem'
import { withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: 'auto',
    flexGrow: 1,
    maxWidth: 400,
    marginBottom: 10,
    marginTop: 10,
  },
})

const TreeItem1 = withStyles({
  root: {
    '&.Mui-selected > .MuiTreeItem-content': {
      color: 'tomato',
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 5,
    },
  },
})(MuiTreeItem)

export default function ExhibitionsMobile() {
  const classes = useStyles()
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<RemoveIcon />}
      defaultExpandIcon={<AddIcon />}
    >
      <TreeItem1 nodeId="1" label="2018">
        <TreeItem1
          nodeId="2"
          label="Latin-American typedesign biennial organized by Typos Latinos, Colombia."
        ></TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="3" label="2016">
        <TreeItem1
          nodeId="4"
          label="Type Masters Exhibition organized by the Berliner Typostammtisch, Berlin."
        ></TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="5" label="2015">
        <TreeItem1
          nodeId="6"
          label="50 Diplômes exhibition organized by Étapes magazine and RedBull Studios, Paris."
        ></TreeItem1>
        <TreeItem1
          nodeId="7"
          label="50 Diplômes exhibition organized by Étapes magazine and RedBull Studios, Paris."
        ></TreeItem1>
        <TreeItem1
          nodeId="8"
          label="Trnava Poster Triennial, Slovakia."
        ></TreeItem1>
        <TreeItem1
          nodeId="9"
          label="World’s best poster designers 2015, International Invitational Exhibition, China. Organized by Guan Shanyue Art Museum."
        ></TreeItem1>
        <TreeItem1
          nodeId="10"
          label="These Woods Have Ears – Geneva, Switzerland. Organized by Rock This Town."
        ></TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="11" label="2013">
        <TreeItem1
          nodeId="12"
          label="100 typographic posters International Invitational Exhibition, China."
        ></TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="13" label="2011">
        <TreeItem1
          nodeId="14"
          label="Weltformat Poster Festival, Lucerne, Switzerland."
        ></TreeItem1>
      </TreeItem1>
    </TreeView>
  )
}
