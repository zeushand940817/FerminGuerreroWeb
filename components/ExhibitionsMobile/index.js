//Icons
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

//Components
import TreeView from '@material-ui/lab/TreeView'
import MuiTreeItem from '@material-ui/lab/TreeItem'

//Styles
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: 'auto',
    flexGrow: 1,
    maxWidth: 400,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: 'transparent',
    '&.MuiTreeItem-content': {
      display: 'flex',
      alingItems: 'left',
    },
  },
  texto: {
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  lastChild: {
    fontSize: 18,
    paddingBottom: 10,
    backgroundColor: 'transparent',
  },
})

const TreeItem1 = withStyles({
  root: {
    '&.Mui-selected > .MuiTreeItem-content': {
      fontStyle: 'italic',
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 5,
    },
  },
})(MuiTreeItem)

export default function ExhibitionsMobile() {
  const classes = useStyles()
  return (
    <TreeView className={classes.root}>
      <TreeItem1 nodeId="1" label="2018" classes={{ label: classes.texto }}>
        <TreeItem1
          nodeId="2"
          label="Latin-American typedesign biennial organized by Typos Latinos, Colombia."
          classes={{ label: classes.lastChild }}
        ></TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="3" label="2016" classes={{ label: classes.texto }}>
        <TreeItem1
          nodeId="4"
          label="Type Masters Exhibition organized by the Berliner Typostammtisch, Berlin."
          classes={{ label: classes.lastChild }}
        ></TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="5" label="2015" classes={{ label: classes.texto }}>
        <TreeItem1
          nodeId="6"
          label="- 50 Diplômes exhibition organized by Étapes magazine and RedBull Studios, Paris."
          classes={{ label: classes.lastChild }}
        ></TreeItem1>
        <TreeItem1
          nodeId="7"
          label="- Trnava Poster Triennial, Slovakia."
          classes={{ label: classes.lastChild }}
        ></TreeItem1>
        <TreeItem1
          nodeId="8"
          label="- World’s best poster designers 2015, International Invitational Exhibition, China. Organized by Guan Shanyue Art Museum."
          classes={{ label: classes.lastChild }}
        ></TreeItem1>
        <TreeItem1
          nodeId="9"
          label="- These Woods Have Ears – Geneva, Switzerland. Organized by Rock This Town."
          classes={{ label: classes.lastChild }}
        ></TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="10" label="2013" classes={{ label: classes.texto }}>
        <TreeItem1
          nodeId="12"
          label="100 typographic posters International Invitational Exhibition, China."
          classes={{ label: classes.lastChild }}
        ></TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="13" label="2011" classes={{ label: classes.texto }}>
        <TreeItem1
          nodeId="14"
          label="Weltformat Poster Festival, Lucerne, Switzerland."
          classes={{ label: classes.texto }}
        ></TreeItem1>
      </TreeItem1>
    </TreeView>
  )
}
