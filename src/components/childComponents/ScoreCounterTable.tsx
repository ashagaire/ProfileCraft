import React, { useState, useRef, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  Button,
  Typography,
  Box,
  Tooltip,
  Stack,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextareaAutosize,
} from "@mui/material";
import {
  ArrowUpward as ArrowUpIcon,
  ArrowDownward as ArrowDownIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Share as ShareIcon,
  Refresh as RefreshIcon,
  People as PeopleIcon,
} from "@mui/icons-material";
import html2canvas from "html2canvas";

// Player interface
interface Player {
  id: number;
  name: string;
  rounds: number[];
  total: number;
}

// Sort configuration interface
interface SortConfig {
  column: string;
  direction: "asc" | "desc";
}

// Toast state interface
interface ToastState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error";
}

// Batch dialog state interface
interface BatchDialogState {
  open: boolean;
  names: string;
}

// Constants
const STORAGE_KEY = "scoreCounterData";
const DEFAULT_ROUNDS = ["Round 1", "Round 2", "Round 3", "Round 4"];
const PLAYER_COLORS = [
  { bgColor: "#bbdefb", textColor: "#1976d2" },
  { bgColor: "#c8e6c9", textColor: "#388e3c" },
  { bgColor: "#e1bee7", textColor: "#7b1fa2" },
  { bgColor: "#ffe0b2", textColor: "#e65100" },
];

const ScoreCounterTable: React.FC = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [toast, setToast] = useState<ToastState>({
    open: false,
    message: "",
    severity: "success",
  });

  const [batchDialog, setBatchDialog] = useState<BatchDialogState>({
    open: false,
    names: "",
  });

  // Create default players with zero scores
  const createDefaultPlayers = (): Player[] => {
    return [
      {
        id: 1,
        name: "Player 1",
        rounds: Array(DEFAULT_ROUNDS.length).fill(0),
        total: 0,
      },
      {
        id: 2,
        name: "Player 2",
        rounds: Array(DEFAULT_ROUNDS.length).fill(0),
        total: 0,
      },
      {
        id: 3,
        name: "Player 3",
        rounds: Array(DEFAULT_ROUNDS.length).fill(0),
        total: 0,
      },
      {
        id: 4,
        name: "Player 4",
        rounds: Array(DEFAULT_ROUNDS.length).fill(0),
        total: 0,
      },
    ];
  };

  // Load saved data or use defaults
  const getSavedData = (): { players: Player[]; rounds: string[] } => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsedData = JSON.parse(saved);
        return {
          players: parsedData.players as Player[],
          rounds: parsedData.rounds as string[],
        };
      }
    } catch (e) {
      console.error("Error loading data:", e);
    }
    return {
      players: createDefaultPlayers(),
      rounds: DEFAULT_ROUNDS,
    };
  };

  const [players, setPlayers] = useState<Player[]>(getSavedData().players);
  const [rounds, setRounds] = useState<string[]>(getSavedData().rounds);
  const [sortConfig, setSort] = useState<SortConfig>({
    column: "total",
    direction: "asc",
  });

  // Save data when changed
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ players, rounds }));
    } catch (e) {
      console.error("Error saving data:", e);
      showToast("Failed to save data", "error");
    }
  }, [players, rounds]);

  // Notifications
  const showToast = (
    message: string,
    severity: ToastState["severity"] = "success"
  ): void => {
    setToast({ open: true, message, severity });
  };

  // Handle score update
  const updateScore = (
    playerId: number,
    roundIndex: number,
    value: number
  ): void => {
    setPlayers(
      players.map((player) => {
        if (player.id === playerId) {
          const newRounds = [...player.rounds];
          newRounds[roundIndex] = value;
          return {
            ...player,
            rounds: newRounds,
            total: newRounds.reduce((sum, score) => sum + score, 0),
          };
        }
        return player;
      })
    );
  };

  // Sorting
  const handleSort = (column: string): void => {
    const direction =
      sortConfig.column === column && sortConfig.direction === "asc"
        ? "desc"
        : "asc";
    setSort({ column, direction });

    setPlayers(
      [...players].sort((a, b) => {
        let comparison = 0;
        if (column === "total") {
          comparison = a.total - b.total;
        } else {
          const index = parseInt(column.replace("round", ""), 10);
          comparison = a.rounds[index] - b.rounds[index];
        }
        return direction === "asc" ? comparison : -comparison;
      })
    );
  };

  // Add new player
  const generateUniquePlayerName = (
    baseId: number,
    existingPlayers: typeof players
  ): string => {
    for (let i = 0; i < 1000; i++) {
      const name = `Player ${baseId + Math.floor(Math.random() * 100)}`;
      if (!existingPlayers.some((p) => p.name === name)) {
        return name;
      }
    }
    // Fallback if something went wrong
    return `Player_${baseId}_${Date.now()}`;
  };

  const addPlayer = (): void => {
    const newId =
      players.length > 0 ? Math.max(...players.map((p) => p.id)) + 1 : 1;
    const name = generateUniquePlayerName(newId, players);

    setPlayers([
      ...players,
      {
        id: newId,
        name,
        rounds: Array(rounds.length).fill(0),
        total: 0,
      },
    ]);
  };

  // Add new round
  const addRound = (): void => {
    const newName = `Round ${rounds.length + 1}`;
    setRounds([...rounds, newName]);
    setPlayers(
      players.map((p) => ({
        ...p,
        rounds: [...p.rounds, 0],
        total: p.rounds.reduce((sum, score) => sum + score, 0),
      }))
    );
  };

  // Edit player name
  const editName = (playerId: number, newName: string): void => {
    if (!newName.trim()) {
      showToast("Player name cannot be empty", "error");
      return;
    }

    if (players.some((p) => p.name === newName && p.id !== playerId)) {
      showToast("Player name already exists", "error");
      return;
    }

    setPlayers(
      players.map((p) => (p.id === playerId ? { ...p, name: newName } : p))
    );
  };

  // Open batch edit dialog
  const openBatchEdit = (): void => {
    setBatchDialog({
      open: true,
      names: players.map((p) => p.name).join(", "),
    });
  };

  // Apply batch edit
  const applyBatchEdit = (): void => {
    const names = batchDialog.names
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name !== "");

    // Check for duplicates
    const uniqueNames = new Set(names);
    if (uniqueNames.size !== names.length) {
      showToast("Duplicate player names found", "error");
      return;
    }

    if (names.length === 0) {
      showToast("Please enter at least one player name", "error");
      return;
    }

    // Create new players list with updated names
    const updatedPlayers: Player[] = [];

    // First update existing players up to the new names count
    for (let i = 0; i < Math.min(players.length, names.length); i++) {
      updatedPlayers.push({
        ...players[i],
        name: names[i],
      });
    }

    // If we have more names than players, add new players
    if (names.length > players.length) {
      let maxId =
        players.length > 0 ? Math.max(...players.map((p) => p.id)) : 0;

      for (let i = players.length; i < names.length; i++) {
        maxId++;
        updatedPlayers.push({
          id: maxId,
          name: names[i],
          rounds: Array(rounds.length).fill(0),
          total: 0,
        });
      }
    }

    setPlayers(updatedPlayers);
    setBatchDialog({ ...batchDialog, open: false });
    showToast("Player names updated", "success");
  };

  // Reset scores
  const resetScores = (): void => {
    if (window.confirm("Reset all scores but keep player names?")) {
      setPlayers(
        players.map((p) => ({
          ...p,
          rounds: Array(rounds.length).fill(0),
          total: 0,
        }))
      );
      showToast("Scores reset", "info");
    }
  };

  // Share scores
  const shareScores = async (): Promise<void> => {
    if (!tableRef.current) return;
    try {
      const canvas = await html2canvas(tableRef.current, {
        backgroundColor: null,
        scale: 2,
      });
      const imageData = canvas.toDataURL("image/png");

      if (navigator.share) {
        const blob = await (await fetch(imageData)).blob();
        const file = new File([blob], "scores.png", { type: "image/png" });
        await navigator
          .share({
            title: "Score Counter",
            text: "Check out our scores!",
            files: [file],
          })
          .catch(() => downloadImage(imageData));
      } else {
        downloadImage(imageData);
      }
      showToast("Image created successfully");
    } catch (e) {
      console.error("Error sharing:", e);
      showToast("Failed to create image", "error");
    }
  };

  // Download helper
  const downloadImage = (dataUrl: string): void => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "scores.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Paper elevation={3} sx={{ overflow: "hidden" }}>
      {/* Header */}
      <Box
        sx={{
          px: 3,
          py: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e0e0e0",
          background: "linear-gradient(to right, #f5f9ff, #ffffff)",
        }}
      >
        <Box>
          <Typography variant="h6">Score Counter</Typography>
          <Typography variant="body2" color="text.secondary">
            Scores auto-save to your browser
          </Typography>
        </Box>
        <Stack direction="row" spacing={1}>
          <Tooltip title="Edit All Players">
            <IconButton
              onClick={openBatchEdit}
              sx={{ p: 1.5, bgcolor: "info.50", color: "info.main" }}
            >
              <PeopleIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reset Scores">
            <IconButton
              onClick={resetScores}
              sx={{ p: 1.5, bgcolor: "warning.50", color: "warning.main" }}
            >
              <RefreshIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share Scoreboard">
            <IconButton
              onClick={shareScores}
              sx={{ p: 1.5, bgcolor: "primary.50", color: "primary.main" }}
            >
              <ShareIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      {/* Table */}
      <div ref={tableRef}>
        <TableContainer component={Paper} elevation={0} sx={{ maxHeight: 440 }}>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "primary.50",
                    position: "sticky",
                    left: 0,
                    zIndex: 3,
                  }}
                >
                  Player
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    bgcolor:
                      sortConfig.column === "total"
                        ? "primary.100"
                        : "primary.50",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("total")}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Total
                    {sortConfig.column === "total" &&
                      (sortConfig.direction === "asc" ? (
                        <ArrowUpIcon fontSize="small" />
                      ) : (
                        <ArrowDownIcon fontSize="small" />
                      ))}
                  </Box>
                </TableCell>

                {rounds.map((round, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      bgcolor:
                        sortConfig.column === `round${index}`
                          ? "primary.100"
                          : "primary.50",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSort(`round${index}`)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {round}
                      {sortConfig.column === `round${index}` &&
                        (sortConfig.direction === "asc" ? (
                          <ArrowUpIcon fontSize="small" />
                        ) : (
                          <ArrowDownIcon fontSize="small" />
                        ))}
                    </Box>
                  </TableCell>
                ))}
                <TableCell>
                  <Tooltip title="Add Round">
                    <IconButton
                      size="small"
                      onClick={addRound}
                      sx={{ bgcolor: "primary.50", color: "primary.main" }}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((player, idx) => (
                <TableRow
                  key={player.id}
                  sx={{ "&:hover": { bgcolor: "action.hover" } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      position: "sticky",
                      left: 0,
                      bgcolor: "background.paper",
                      zIndex: 1,
                      borderRight: "1px solid #e0e0e0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        py: 0.5,
                        px: 1.5,
                        borderRadius: "16px",
                        bgcolor:
                          PLAYER_COLORS[idx % PLAYER_COLORS.length].bgColor,
                        color:
                          PLAYER_COLORS[idx % PLAYER_COLORS.length].textColor,
                      }}
                    >
                      <Typography variant="body2" sx={{ mr: 1 }}>
                        {player.name}
                      </Typography>
                      <IconButton
                        size="small"
                        sx={{
                          opacity: 0,
                          ".MuiTableRow-root:hover &": { opacity: 0.7 },
                        }}
                        onClick={() => {
                          const newName = prompt(
                            "Edit player name:",
                            player.name
                          );
                          if (newName) editName(player.id, newName);
                        }}
                      >
                        <EditIcon
                          fontSize="small"
                          sx={{ fontSize: "0.8rem" }}
                        />
                      </IconButton>
                    </Box>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      bgcolor:
                        sortConfig.column === "total"
                          ? "primary.50"
                          : "transparent",
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                        bgcolor: "grey.100",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "16px",
                        minWidth: "3rem",
                      }}
                    >
                      {player.total}
                    </Box>
                  </TableCell>

                  {player.rounds.map((score, roundIdx) => (
                    <TableCell
                      key={roundIdx}
                      align="center"
                      sx={{
                        bgcolor:
                          sortConfig.column === `round${roundIdx}`
                            ? "primary.50"
                            : "transparent",
                      }}
                    >
                      <TextField
                        type="number"
                        inputProps={{
                          min: 0,
                          style: { textAlign: "center" },
                          inputMode: "numeric",
                          pattern: "[0-9]*",
                        }}
                        value={score}
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 0;
                          updateScore(player.id, roundIdx, value);
                        }}
                        variant="outlined"
                        size="small"
                        sx={{ width: "5rem" }}
                      />
                    </TableCell>
                  ))}
                  <TableCell></TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell
                  sx={{
                    position: "sticky",
                    left: 0,
                    bgcolor: "background.paper",
                    zIndex: 1,
                  }}
                >
                  <Button
                    startIcon={<AddIcon />}
                    onClick={addPlayer}
                    color="primary"
                    sx={{ borderRadius: "20px", textTransform: "none" }}
                  >
                    Add Player
                  </Button>
                </TableCell>
                <TableCell colSpan={rounds.length + 2}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Batch Edit Dialog */}
      <Dialog
        open={batchDialog.open}
        onClose={() => setBatchDialog({ ...batchDialog, open: false })}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <PeopleIcon sx={{ mr: 1 }} />
            Edit All Players
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Enter player names separated by commas
          </Typography>
          <TextareaAutosize
            minRows={4}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              borderColor: "#ccc",
            }}
            value={batchDialog.names}
            onChange={(e) =>
              setBatchDialog({ ...batchDialog, names: e.target.value })
            }
            placeholder="Player 1, Player 2, Player 3, Player 4"
          />
          <Typography
            variant="caption"
            color="info.main"
            sx={{ display: "block", mt: 1 }}
          >
            Tip: Add or remove players by changing the number of names
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setBatchDialog({ ...batchDialog, open: false })}
            color="inherit"
          >
            Cancel
          </Button>
          <Button onClick={applyBatchEdit} color="primary" variant="contained">
            Apply
          </Button>
        </DialogActions>
      </Dialog>

      {/* Toast */}
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToast({ ...toast, open: false })}
          severity={toast.severity}
          variant="filled"
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default ScoreCounterTable;
