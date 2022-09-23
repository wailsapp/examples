package main

import (
	"context"
	"fmt"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// OpenDialog opens a dialog with a default No button
func (a *App) OpenDialog() string {

	result, err := runtime.MessageDialog(a.ctx, runtime.MessageDialogOptions{
		Type:          runtime.QuestionDialog,
		Title:         "Question",
		Message:       "Do you want to continue?",
		DefaultButton: "No",
	})

	if err != nil {
		return fmt.Sprintf("Error: %s", err.Error())
	}

	return result
}
