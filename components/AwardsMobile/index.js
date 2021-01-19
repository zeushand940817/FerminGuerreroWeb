//Styles
import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'

//Components
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'
import MuiTreeItem from '@material-ui/lab/TreeItem'

//Icons
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const useStyles = makeStyles({
  root: {
    height: 'auto',
    flexGrow: 1,
    maxWidth: 400,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  texto: {
    fontSize: 18,
    alignItems: 'flex-start',
  },
  text1: {
    fontSize: 18,
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
  },
  lastChild: {
    fontSize: 18,
    paddingBottom: 10,
  },
  firstChild: {
    fontSize: 18,
  },
})

const TreeItem1 = withStyles({
  root: {
    '&.Mui-selected > .MuiTreeItem-content > .MuiTreeItem-label': {
      display: 'flex',
      flexDirection: 'row',
      fontStyle: 'italic',
      fontSize: 18,
      backgroundColor: 'transparent',
      alignItems: 'flex-start',
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
      <TreeItem1
        nodeId="4"
        label="2019"
        classes={{ label: classes.firstChild }}
      >
        <TreeItem1
          nodeId="5"
          label="Latin Design Awards."
          classes={{ label: classes.firstChild }}
        >
          <TreeItem
            nodeId="6"
            label="Prize: Gold."
            classes={{ label: classes.firstChild }}
          />
          <TreeItem
            nodeId="7"
            label="Project: Thesaurus."
            classes={{ label: classes.texto }}
          />
          <TreeItem
            nodeId="8"
            label="Category: Typeface design."
            classes={{ label: classes.lastChild }}
          />
        </TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="9" label="2018" classes={{ label: classes.texto }}>
        <TreeItem1
          nodeId="10"
          label="European Design Awards."
          classes={{ label: classes.texto }}
        >
          <TreeItem
            nodeId="11"
            label="Prize: Gold."
            classes={{ label: classes.texto }}
          />
          <TreeItem
            nodeId="12"
            label="Project: Thesaurus."
            classes={{ label: classes.texto }}
          />
          <TreeItem
            nodeId="13"
            label="Category: Typeface design."
            classes={{ label: classes.lastChild }}
          />
        </TreeItem1>
        <TreeItem1
          nodeId="14"
          label="Swiss Typefaces."
          classes={{ label: classes.texto }}
        >
          <TreeItem
            nodeId="15"
            label="Prize: Gold."
            classes={{ label: classes.texto }}
          />
          <TreeItem
            nodeId="16"
            label="Selected Thesaurus for their 40 pages specimen
               called Type Life 3, showcasing 19 non-SWTY typefaces they like."
            classes={{ label: classes.lastChild }}
          />
        </TreeItem1>
        <TreeItem1
          nodeId="17"
          label="Type 4."
          classes={{ label: classes.texto }}
        >
          <TreeItem
            nodeId="18"
            label="Prize: Gold."
            classes={{ label: classes.texto }}
          />
          <TreeItem
            nodeId="19"
            label="Project: Thesaurus."
            classes={{ label: classes.texto }}
          />
          <TreeItem
            nodeId="20"
            label=" Typeface Design Competition by Graphis magazine."
            classes={{ label: classes.lastChild }}
          />
        </TreeItem1>
        <TreeItem1
          nodeId="21"
          label="Latin-American typedesign biennial."
          classes={{ label: classes.texto1 }}
        >
          <TreeItem
            nodeId="22"
            label="Prize: First Prize. Mention of Exellence."
            classes={{ label: classes.texto }}
          />
          <TreeItem
            nodeId="23"
            label="Project: Thesaurus."
            classes={{ label: classes.texto }}
          />
          <TreeItem
            nodeId="24"
            label="Category: Superfamily."
            classes={{ label: classes.lastChild }}
          />
        </TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="25" label="2015" classes={{ label: classes.texto }}>
        <TreeItem1
          nodeId="26"
          label="Trnava Poster Triennial International competition."
          classes={{ label: classes.texto }}
        >
          <TreeItem
            nodeId="27"
            label="Prize: Honorary mention."
            classes={{ label: classes.texto }}
          />
          <TreeItem
            nodeId="28"
            label="Category: Typeface design."
            classes={{ label: classes.texto }}
          />
          <TreeItem
            nodeId="29"
            label="Project:  New Year, New Fight."
            classes={{ label: classes.lastChild }}
          />
        </TreeItem1>
      </TreeItem1>
      <TreeItem1 nodeId="30" label="2014" classes={{ label: classes.texto }}>
        <TreeItem1
          nodeId="31"
          label="Rolex's Foundation (Hans Wilsdorf)."
          classes={{ label: classes.texto }}
        >
          <TreeItem
            nodeId="27"
            label="Project: BA graduate project."
            classes={{ label: classes.texto }}
          />
          <TreeItem
            nodeId="32"
            label="Schoolarship Awarded."
            classes={{ label: classes.lastChild }}
          />
        </TreeItem1>
        <TreeItem1
          nodeId="33"
          label="BEA fondation."
          classes={{ label: classes.texto }}
        >
          <TreeItem
            nodeId="34"
            label="Prize: Award for young artists."
            classes={{ label: classes.lastChild }}
          />
        </TreeItem1>
      </TreeItem1>
    </TreeView>
  )
}
