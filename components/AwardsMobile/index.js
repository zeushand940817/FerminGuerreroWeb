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

export default function AwardsMobile() {
  const classes = useStyles()
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<RemoveIcon />}
      defaultExpandIcon={<AddIcon />}
    >
      <TreeItem1 nodeId="4" label="2019">
        <TreeItem1 nodeId="5" label="Latin Design Awards.">
          <TreeItem nodeId="6" label="Prize: Gold." />
          <TreeItem nodeId="7" label="Project: Thesaurus." />
          <TreeItem nodeId="8" label="Category: Typeface design." />
        </TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="9" label="2018">
        <TreeItem1 nodeId="10" label="European Design Awards.">
          <TreeItem nodeId="11" label="Prize: Gold." />
          <TreeItem nodeId="12" label="Project: Thesaurus." />
          <TreeItem nodeId="13" label="Category: Typeface design." />
        </TreeItem1>
        <TreeItem1 nodeId="14" label="Swiss Typefaces.">
          <TreeItem nodeId="15" label="Prize: Gold." />
          <TreeItem
            nodeId="16"
            label="Selected Thesaurus for their 40 pages specimen
               called Type Life 3, showcasing 19 non-SWTY typefaces they like."
          />
        </TreeItem1>
        <TreeItem1 nodeId="17" label="Type 4.">
          <TreeItem nodeId="18" label="Prize: Gold." />
          <TreeItem nodeId="19" label="Project: Thesaurus" />
          <TreeItem
            nodeId="20"
            label=" Typeface Design Competition by Graphis magazine."
          />
        </TreeItem1>
        <TreeItem1 nodeId="21" label="Latin-American typedesign biennial">
          <TreeItem
            nodeId="22"
            label="Prize: First Prize. Mention of Exellence."
          />
          <TreeItem nodeId="23" label="Project: Thesaurus." />
          <TreeItem nodeId="24" label="Category: Superfamily" />
        </TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="25" label="2015">
        <TreeItem1 nodeId="26" label="Prize: Honorary mention.">
          <TreeItem nodeId="27" label="Project:  New Year, New Fight." />
          <TreeItem nodeId="28" label="Category: Typeface design." />
          <TreeItem
            nodeId="29"
            label="Trnava Poster Triennial International competition"
          />
        </TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="30" label="2014">
        <TreeItem1 nodeId="31" label="Rolex's Foundation (Hans Wilsdorf).">
          <TreeItem nodeId="27" label="Project: BA graduate project." />
          <TreeItem nodeId="32" label="Schoolarship Awarded." />
        </TreeItem1>
        <TreeItem1 nodeId="33" label="BEA fondation.">
          <TreeItem nodeId="34" label="Prize: Award for young artists." />
        </TreeItem1>
      </TreeItem1>
    </TreeView>
  )
}
