import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import TreeItem from '@material-ui/lab/TreeItem'
import { BiLink } from 'react-icons/bi'
import MuiTreeItem from '@material-ui/lab/TreeItem'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
    marginTop: 10,
  },
  a: {
    outiline: 'none',
  },
})

const TreeItem1 = withStyles({
  root: {
    '&.Mui-selected > .MuiTreeItem-content': {
      fontStyle: 'italic',
      display: 'flex',
      alignItems: 'flex-start',
    },
  },
})(MuiTreeItem)

function PressMobile(props) {
  const classes = useStyles()

  return (
    <>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<RemoveIcon />}
        defaultExpandIcon={<AddIcon />}
      >
        <TreeItem1 nodeId="1" label="Brick; a New Font Brewing.">
          <a
            className={classes.a}
            href="https://medium.com/@Colophon/brick-a-new-font-brewing-e2a982e39c8f"
            target="_blank"
          >
            <BiLink size={18} color="white" />
          </a>
          <TreeItem nodeId="3" label="Published at Medium." />
          <TreeItem nodeId="4" label="Year: 2020." />
        </TreeItem1>

        <TreeItem1 nodeId="5" label="Thesaurus.">
          <TreeItem nodeId="6" label="Thesaurus's development." />
          <TreeItem nodeId="7" label="Published at I Love Typography." />
          <TreeItem nodeId="8" label="Year: 2017." />
          <a
            className={classes.a}
            href="https://ilovetypography.com/2017/01/30/thesaurus-fonts/"
            target="_blank"
          >
            <BiLink size={18} color="white" />
          </a>
        </TreeItem1>

        <TreeItem1
          nodeId="9"
          label="Monograms, A study of the development of monograms: From Ancient Greek coins to contemporary logos. MATD’s dissertation."
        >
          <TreeItem nodeId="10" label="" />
          <TreeItem nodeId="11" label="Published in Academia." />
          <TreeItem nodeId="12" label="Year: 2020." />
          <a
            className={classes.a}
            href="https://drive.google.com/file/d/1usq_4mDOYGLyk5rxxST_gO_g4D5YVc1w/view"
            target="_blank"
          >
            <BiLink size={18} color="white" />
          </a>
        </TreeItem1>

        <TreeItem1 nodeId="13" label="Reflection on Practice.">
          <TreeItem
            nodeId="14"
            label="An inside look at the creation process of Exentra. MATD’s R.O.P."
          />
          <TreeItem nodeId="15" label="Published in Academia." />
          <TreeItem nodeId="16" label="Year: 2015." />
          <a
            className={classes.a}
            href="https://drive.google.com/file/d/0B-QGJpCKyJVIMnBCdFgwUjgyMVU/view"
            target="_blank"
          >
            <BiLink size={18} color="white" />
          </a>
        </TreeItem1>

        <TreeItem1 nodeId="17" label="If Geneva was a typeface.">
          <TreeItem nodeId="18" label="Bachelor thesis at HEAD." />
          <TreeItem nodeId="19" label="Published in Academia." />
          <TreeItem nodeId="20" label="Year: 2014." />
          <a
            className={classes.a}
            href="https://drive.google.com/file/d/1BPO5B35zRuYPh-QjuLWg-5TTMOYH0eNi/view"
            target="_blank"
          >
            <BiLink size={18} color="white" />
          </a>
        </TreeItem1>
      </TreeView>
    </>
  )
}

export default PressMobile
